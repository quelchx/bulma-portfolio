<template>
  <section class="container mt-6 pt-6">
    <a @click="scrollToBottom" class="level-right">
      <div class="tag is-white">
        <div v-if="user.loggedIn">Comment</div>
        <div v-else>Login or Register</div>
      </div>
    </a>
    <div v-if="!err && post.length === 0">
      <Loading />
    </div>
    <div v-if="err">Error: {{ err.message }}</div>
    <div class="box">
      <AOS animation='fade-right' class="title">{{ post.title }}</AOS>
      <AOS animation='fade-left' class="px-2 subtitle subtitled">{{ post.description }}</AOS>
      <AOS animation='fade-down' class="block py-2 px-2 is-markdown" v-html="article" />
    </div>

    <h1 class="title is-5 has-text-centered" v-if="user.loggedIn">Posts</h1>
    <p v-else class="has-text-centered">
      <nuxt-link to="/login">Login</nuxt-link> or
      <nuxt-link to="/register">register</nuxt-link> to read comments or comment
    </p>

    <!-- 
      note: content will only load in if user is logged in.
      I attempted to fix an issue that occurs when no user is logged in. 
      a null is returned from vuex --  @component => (Comment :email='user') 
      this makes the page crash -- this v-if check on the user login state resolves the issue at the cost of 
      not showing comments to non-registered users 
    -->

    <AOS animation='fade-in' v-if="user.loggedIn">
      <AOS animation='fade-down' class="media" v-for="(comment, index) in comments" :key="index">
        <figure class="media-left">
          <p class="image is-64x64">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/comment-2551199-2136583.png"
            />
          </p>
        </figure>

        <Comments
          :func="toggleModal"
          :post="comment.post"
          :id="comment.id"
          :comment="comment"
          :user="comment.email"
          :email="user"
          :removed="deleteComment"
        />
      </AOS>

      <EditComment
        :func="editComment"
        :id="edit.id"
        :modal="modal"
        :toggle="toggleModal"
        :feedback="feedback"
        :clear="clearModal"
      >
        <textarea class="textarea" rows="10" v-model="edit.post" />
      </EditComment>

      <br />
      <Message :user="user" :feedback="feedback" :func="addComment">
        <textarea
          class="textarea"
          placeholder="Add a comment..."
          v-model="comment"
          :disabled="!user.loggedIn"
        ></textarea>
      </Message>
    </AOS>
  </section>
</template>

<script>
import marked from 'marked'
import db from '@/lib/init'

import { mapGetters } from 'vuex'

import AOS from '@/components/AOS.vue'
import Message from '@/components/Message.vue'
import Comments from '@/components/Comments.vue'
import EditComment from '@/components/EditComment.vue'
import Loading from '@/components/utils/Loading.vue'
import Tooltip from '@/components/utils/Tooltip.vue'

export default {
  components: { AOS, Loading, Tooltip, Message, Comments, EditComment },
  head() {
    return {
      title: `${this.post.title}`,
      titleTemplate: `${this.post.title} - Article by Eric Quelch`,
      meta: [
        {
          hid: `${this.post.title}`,
          name: `${this.post.title} - ${this.post.description}`,
          content: `${this.post.content}`,
        },
      ],
    }
  },
  data() {
    return {
      post: [],
      err: null,
      article: null,
      comments: [],
      comment: null,
      feedback: null,
      edit: { post: null, id: '' },
      modal: 'modal',
    }
  },
  computed: { ...mapGetters({ user: 'user' }) },
  methods: {
    addComment() {
      if (this.user.loggedIn) {
        if (this.comment) {
          this.feedback = null
          db.collection('Comments')
            .add({
              id: this.$route.params.id,
              post: this.comment,
              user: this.user.data.displayName,
              email: this.user.data.email,
              timestamp: new Date().toLocaleString(),
            })
            .then(() => {
              this.redirected()
            })
            .catch((err) => {
              console.log(err)
            })
        } else this.feedback = true
      }
    },
    editComment(id) {
      if (this.edit.post) {
        this.feedback = null
        db.collection('Comments')
          .doc(id)
          .update({ post: this.edit.post })
          .then(() => {
            this.toggleModal()
            this.redirected()
          })
          .catch((err) => {
            console.log(err)
          })
      } else this.feedback = 'You must enter a message to enter'
    },
    deleteComment(id) {
      db.collection('Comments')
        .doc(id)
        .delete()
        .then(() => {
          this.comments = this.comments.filter((post) => {
            return post.id != id
          })
        })
    },
    toggleModal(edit, id) {
      this.edit = { post: edit, id: id }
      if (this.modal == 'modal is-active') {
        return (this.modal = 'modal')
      } else {
        this.modal = 'modal is-active'
      }
    },
    clearModal() {
      return (this.edit = '')
    },
    redirected() {
      this.$router.go(this.$router.currentRoute)
    },
    scrollToBottom() {
      return window.scrollTo(0, 100000)
    },
  },
  async mounted() {
    try {
      let res = await fetch(`${process.env.url}/${this.$route.params.id}`)
      this.post = await res.json()
      this.article = marked(this.post.content)
    } catch (error) {
      console.log(error)
    }
  },
  async created() {
    db.collection('Comments')
      .where('id', '==', this.$route.params.id)
      .orderBy('timestamp', 'desc')
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          let post = doc.data()
          post.id = doc.id
          this.comments.push(post)
        })
      })
      .catch((error) => console.log('Firebase Fetch Error: ', error))
  },
}
</script>

<style lang="scss">
.is-markdown {
  display: flex;
  flex-direction: column;
  gap: 20px;

  strong {
    color: #61540a;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 22px;
  }

  p {
    line-height: 30px;
    code {
      background-color: #cae2c0 !important;
      color: steelblue !important;
    }
  }

  code,
  pre {
    border-radius: 4px;
    background-color: #434446 !important;
    color: #18cebf !important;
  }
}
</style>

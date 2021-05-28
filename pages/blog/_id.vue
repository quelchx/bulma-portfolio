<template>
  <section class="container is-fluid mt-6 pt-6">
    <AOS animation="fade-in" v-if="!err && post.length === 0">
      <Loading />
    </AOS>
    <AOS animation="slide-up" v-if="err">Error: {{ err.message }}</AOS>
    <AOS animation="fade-up" class="box">
      <h1 class="title">{{ post.title }}</h1>
      <h2 class="px-2 subtitle subtitled">{{ post.description }}</h2>
      <AOS
        animation="fade-down"
        class="block py-2 px-2 is-markdown"
        v-html="article"
      />
    </AOS>
    <AOS animation="fade-in" class="buttons section">
      <router-link class="button is-info" to="/blog">Go Back</router-link>
      <button @click="scrollToTop" class="button is-dark">Top of Page</button>
    </AOS>
    
  </section>
</template>

<script>
import marked from 'marked'
import AOS from '@/components/AOS.vue'
import Loading from '@/components/utils/Loading.vue'
export default {
  components: { AOS, Loading },
  async mounted() {
    try {
      let res = await fetch(
        `${process.env.url}/${this.$route.params.id}`
      )
      this.post = await res.json()
      this.article = marked(this.post.content)
    } catch (error) {
      this.err = error
    }
  },
  data() {
    return {
      post: [],
      article: null,
      err: null,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style lang="scss">
.is-markdown {
  display: flex;
  flex-direction: column;
  gap: 20px;

  strong {
    color: rgb(97, 84, 10);
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
      background-color: rgb(202, 226, 192) !important;
      color: steelblue !important;
    }
  }

  code,
  pre {
    border-radius: 4px;
    background-color: rgb(67, 68, 70) !important;
    color: rgb(24, 206, 191) !important;
  }
}
</style>

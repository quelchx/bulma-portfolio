<template>
  <div class="container is-max-desktop py-6">
    <section class="hero">
      <div class="hero-body">
        <AOS animation="fade-in" class="column is-12">
          <h1 class="title is-4">Articles and Guides</h1>
          <AOS animation="slide-down" class="py-2">
            <b-image
              class="is-rounded pb-5"
              :src="require('~/assets/images/main.png')"
              alt="article-main-image"
            />
          </AOS>
          <div class="px-2">
            <AOS animation="fade-in" class="block">
              Articles and guides intensions are to help new developers get
              going.
            </AOS>
            <AOS animation="fade-in" class="block">
              I'm always open to donations. If you wish to donate, it goes a
              long way. Donate
              <a
                target="_blank"
                class="link"
                id="strikeout"
                rel="noopener noreferrer"
                href="https://www.paypal.com/donate?hosted_button_id=U3Z4B6SDYDDSS"
                >here</a
              >. Link redirects to PayPal.
            </AOS>
          </div>
        </AOS>
      </div>
    </section>
    <div class="container is-fluid">
      <AOS
        animation="fade-in"
        class="has-text-centered"
        v-if="!err && posts.length === 0"
      >
        <div class="mt-6">
          <Loading />
        </div>
      </AOS>
      <AOS animation="fade-in" v-if="err">Error: {{ err.message }}</AOS>
      <AOS animation="fade-down" class="hero">
        <div class="hero-body box" v-for="(post, index) in posts" :key="index">
          <h2 class="subtitle subtitled">{{ post.title }}</h2>
          <p class="py-2">Published: {{ convertDate(post.published_at) }}</p>
          <span class="tag block"
            >Updated: {{ convertDate(post.updatedAt) }}</span
          >
          <p class="block">{{ post.description }}</p>
          <nuxt-link class="button is-info" :to="`/blog/` + post._id"
            >Read More</nuxt-link
          >
        </div>
      </AOS>
    </div>
  </div>
</template>

<script>
import AOS from '@/components/AOS.vue'
import Loading from '@/components/utils/Loading.vue'

export default {
  components: { AOS, Loading },
  head() {
    return {
      title: 'Articles and Guides',
      titleTemplate: 'Articles and Guides',
      meta: [
        {
          hid: `Eric Quelch - Articles and Guides`,
          name: `Articles and Guides by Eric Quelch`,
          content: `Read articles and guides writen by Eric Quelch`,
        },
      ],
    }
  },
  async beforeCreate() {
    try {
      let res = await fetch(process.env.url)
      this.posts = await res.json()
      return this.posts.reverse()
    } catch (error) {
      this.err = error
    }
  },
  data() {
    return {
      posts: [],
      err: null,
    }
  },
  methods: {
    convertDate(date) {
      return new Date(date).toUTCString()
    },
  },
}
</script>

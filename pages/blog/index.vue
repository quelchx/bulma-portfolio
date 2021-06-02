<template>
  <div class="container is-fluid py-6">
    <div class="columns">
      <AOS
        animation="fade-right"
        class="
          column
          is-10-mobile
          is-6-tablet
          is-offset-1-tablet
          is-5-desktop
          is-offset-1-desktop
          is-5-widescreen
          is-offset-1-widescreen
          is-5-fullhd
          is-offset-1-fullhd
        "
      >
        <div class="column is-12">
          <h1 class="title is-4">Articles and Guides</h1>
          <p class="py-2">
            <img
              class="is-rounded pb-5"
              src="~/assets/images/main.png"
              alt=""
            />
          </p>
          <h1 class="title is-4">Become a Patreon (Coming Soon)</h1>
          <div class="px-2">
            <p class="block">
              Become a patreon today to get full access to the latest content
              and guides. You will get full access to all the repositories, code
              examples and instructions to help you get started with
              indermediate to advanced web development.
            </p>
            <p class="block">
              What I can provide is templates to get you started with things
              such as Vue.js, CSS, HTML, JavaScript, Node.js, MongoDB, Firebase,
              Reactjs, Nuxtjs, Nextjs, SCSS and more.
            </p>
            <p class="block">
              I have put together a lot of content gathered from courses,
              college and other sources in order to save you time -- and get you
              into what's important straight away.
              <strong>Help me out by becoming a patreon today!</strong>
            </p>
            <p class="block pt-4">
              Articles and guides to help developers like myself get going.
            </p>
            <p class="block">
              I'm always open to donations. If you wish to donate, it goes a
              long way. Donate
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.paypal.com/donate?hosted_button_id=U3Z4B6SDYDDSS"
                >here</a
              >. Link redirects to PayPal.
            </p>
          </div>
        </div>
      </AOS>
      <AOS
        animation="fade-up"
        class="
          column
          is-10-mobile
          is-4-tablet
          is-offset-1-tablet
          is-4-desktop
          is-offset-1-desktop
          is-4-widescreen
          is-offset-1-widescreen
          is-4-fullhd
          is-offset-1-fullhd
        "
      >
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
          <div
            class="hero-body box"
            v-for="(post, index) in posts"
            :key="index"
          >
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

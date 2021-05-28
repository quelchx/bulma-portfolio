<template>
  <div class="container is-fluid my-6 py-6">
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
        <h1 class="title is-4">Articles and Guides</h1>
        <p class="py-2">
          <img
            class="pb-5"
            src="https://cdn.emk.dev/templates/featured-image.png"
            alt=""
          />
        </p>
        <div class="px-2">
          <p class="block">
            Articles and guides to help developers like myself get going.
          </p>
          <p class="block">
            All articles are being rendered from a Heroku API and might take
            some time to load due to the cold start time.
          </p>
          <p class="block">I apologize for any inconviences!</p>
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
        <div class='mt-6'>
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
      </AOS>
    </div>
  </div>
</template>

<script>
import AOS from '@/components/AOS.vue'
import Loading from '@/components/utils/Loading.vue'

export default {
  components: { AOS, Loading },
  async beforeCreate() {
    try {
      let res = await fetch(process.env.url)
      let data = await res.json()
      for (let i = data.length - 1; i >= 0; i--) {
        this.posts.push(data[i])
      }
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

<template>
  <section class='light' id='theme'>
    <main id="main">
      <div class="container is-fluid">
        <Navbar @display="toggle = !toggle" />
      </div>
      <Sidebar :show="toggle" @close="toggle = false" />
      <div id="nuxt">
        <Nuxt />
      </div>
      <Footer />
    </main>
  </section>
</template>

<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'

import Navbar from '@/components/global/Navbar.vue'
import Sidebar from '@/components/global/Sidebar.vue'
import Footer from '@/components/global/Footer.vue'

export default {
  /** @beforeCreate is to help heroku and mongodb start up so blog page loads content a bit faster -> eventually convert this to a possible state? */
  async beforeCreate() {
    let res = await fetch(process.env.url)
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.dispatch('fetchUser', user)
    })
  },
  computed: { ...mapGetters({ user: 'user' }) },
  components: { Navbar, Sidebar, Footer },
  data() {
    return { toggle: false }
  },
}
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/" id="strikeout">
        quelch()
      </nuxt-link>
      <Hamburger @toggle="$emit('display')" />
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <div v-for="(route, index) in routes" :key="index">
          <Tooltip :message="route.tip">
            <nuxt-link :to="route.path" class="navbar-item" id="strikeout">
              {{ route.name }}
            </nuxt-link>
          </Tooltip>
        </div>
        <Tooltip message="Register a Free Account">
          <nuxt-link
            to="/register"
            class="navbar-item"
            id="strikeout"
            v-if="!user.loggedIn"
            >.register()</nuxt-link
          >
        </Tooltip>
        <Tooltip message="Login to your account">
          <nuxt-link
            v-if="!user.loggedIn"
            to="/login"
            class="navbar-item"
            id="strikeout"
            >.login()
          </nuxt-link>
        </Tooltip>
        <Tooltip message="Logout?">
          <a
            @click="signout"
            href="#"
            class="navbar-item"
            id="strikeout"
            v-if="user.loggedIn"
            >.logout()</a
          >
        </Tooltip>
        <Tooltip message="Authorized Users Only">
          <a
            target="_blank"
            :href="url"
            id="strikeout"
            class="navbar-item"
            v-if="user.loggedIn && user.data.email === email"
            >.auth()</a
          >
        </Tooltip>
        <Tooltip message="Change Theme?">
          <a class="navbar-item" @click="toggleTheme" id="strikeout"
            >.theme({{ theme }})</a
          >
        </Tooltip>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'
import Hamburger from './Hamburger.vue'
import Tooltip from '../utils/Tooltip.vue'
export default {
  name: 'Navbar',
  components: { Hamburger, Tooltip },
  computed: { ...mapGetters({ user: 'user' }) },
  methods: {
    signout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go(this.$router.currentRoute)
        })
    },
    toggleTheme() {
      if (this.theme === 'light') {
        this.theme = 'dark'
        document.querySelector('.light').className = 'dark'
      } else {
        this.theme = 'light'
        document.querySelector('.dark').className = 'light'
      }
    },
  },
  data() {
    return {
      email: process.env.strapi_email,
      url: process.env.strapi_url,
      theme: 'light',
      routes: [
        {
          path: '/about',
          name: '.me()',
          tip: 'About Eric Quelch',
        },
        {
          path: '/contact',
          name: '.contact()',
          tip: 'Contact Me?',
        },
        {
          path: '/blog',
          name: '.articles()',
          tip: 'Guides and Articles',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  padding: 20px 30px;
  font-family: 'Monaco' !important;
}
.navbar-item {
  font-size: 20px;
}
</style>

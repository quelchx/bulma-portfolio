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
          <nuxt-link :to="route.path" class="navbar-item" id='strikeout'>
            {{ route.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Hamburger from '../utils/Hamburger.vue'
export default {
  name: 'Navbar',
  components: { Hamburger },
  data() {
    return {
      routes: [
        {
          path: '/about',
          name: '.me()',
        },
        {
          path: '/contact',
          name: '.contact()',
        },
        {
          path: '/blog',
          name: '.articles()'
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  margin: 20px 30px;
}
.navbar-item {
  font-size: 24px;
}
</style>
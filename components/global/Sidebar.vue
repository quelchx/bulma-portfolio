<template>
  <section class="menu-wrapper">
    <transition name="backdrop">
      <div class="menu-backdrop" v-if="show" @click="$emit('close')"></div>
    </transition>
    <transition name="slide-side">
      <div v-if="show" class="menu-navbar">
        <nuxt-link class="title is-3" to="/">quelch()</nuxt-link>
        <ul class="menu-list" @click="$emit('close')">
          <div v-for="(route, index) in routes" :key="index">
            <li>
              <nuxt-link :to="route.path" class="navbar-item">
                {{ route.name }}
              </nuxt-link>
            </li>
          </div>
        </ul>
        <div class="end">
          <TypeWriter :array="name" />
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import TypeWriter from '../utils/TypeWriter.vue'
export default {
  name: 'Sidebar',
  components: { TypeWriter },
  data() {
    return {
      name: ['Eric Quelch'],
      routes: [
        {
          name: 'quelch()',
          path: '/',
        },
        {
          name: '.me()',
          path: '/about',
        },
        {
          name: '.contact()',
          path: '/contact',
        },
        {
          name: '.articles()',
          path: '/blog',
        },
      ],
    }
  },
  props: {
    show: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss" scoped>
@mixin fillout() {
  height: 100%;
  width: 100%;
}

@mixin topleft() {
  top: 0;
  left: 0;
}

.menu-wrapper {
  @include fillout();
  font-size: 20px;

  .menu-backdrop {
    @include fillout();
    @include topleft();
    z-index: 100;
    position: fixed;
    background-color: #0c1117e6;
  }

  .menu-navbar {
    @include topleft();
    height: 100%;
    width: 240px;
    position: fixed;
    background-color: white;
    z-index: 200;
    box-sizing: border-box;
    padding: 2rem;

    .menu-list {
      padding-top: 20px;
    }
  }

  .menu-label {
    font-weight: bold;
    padding-left: 10px;
  }

  .end {
    position: absolute;
    bottom: 20px;

    .is-typed {
      font-size: 18px !important; //override default
    }
  }

  .backdrop-enter-active,
  .backdrop-leave-active,
  .slide-side-enter-active,
  .slide-side-leave-active {
    transition: transform 0.3s ease-in-out, background-color 0.2s ease;
  }

  .backdrop-enter,
  .backdrop-leave-to {
    background-color: #0c1117;
  }

  .slide-side-enter,
  .slide-side-leave-to {
    transform: translateX(-100%);
  }
}
</style>

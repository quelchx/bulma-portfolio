<template>
  <footer class="footer">
    <AOS animation="fade-in" class="my-4 content has-text-centered">
      <p>
        <strong>Made</strong> by
        <a id="strikeout" href="https://github.com/quelchx">Eric Quelch</a>.
        Source code is viewable

        <a id="strikeout" href="https://github.com/quelchx/portfolio"
          >on github</a
        >
        <i id="strikeout" class="fab fa-github"></i>
      </p>
      <Tooltip message="Scroll To Top">
        <span id="strikeout" class="top" @click="scrollToTop"
          ><i class="fas fa-arrow-up"></i
        ></span>
      </Tooltip>
    </AOS>
  </footer>
</template>

<script>
import AOS from '../AOS.vue'
import Tooltip from '../utils/Tooltip.vue'
export default {
  name: 'Footer',
  components: { AOS, Tooltip },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style lang="scss" scoped>
.top {
  color: #1374e2;
  cursor: pointer;
}
</style>

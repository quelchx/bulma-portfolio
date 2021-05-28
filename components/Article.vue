<template>
  <article>
    <figure class="image is-5by3">
      <img
        @click="redirect(path)"
        src="https://i.ibb.co/fq8hSGQ/placeholder-image-368x246.png"
      />
    </figure>
    <h2 class="subtitle pt-4">{{ title }}</h2>
    <Link :path="path" id="strikeout">
      {{ desc }}
    </Link>
  </article>
</template>

<script>
import Link from './utils/Link.vue'
export default {
  name: 'Article',
  components: { Link },
  props: ['path', 'title', 'desc'],
  methods: {
    redirect(path) {
      location.href = path
    },
  },
}
</script>
<template>
  <div class="column is-6">
    <div class="category">
      <h1 class="title is-5">
        {{ title }}
        <span
          >{{ subtitle }} <a id="strikeout" :href="path">{{ link }}</a></span
        >
      </h1>
      <hr />
      <ul>
        <slot />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title', 'subtitle', 'link', 'path'],
}
</script>

<style lang="scss" scoped>
ul {
  line-height: 30px;
}

.title {
  span {
    opacity: 0.5;
    font-size: 1rem;
    margin-left: 1rem;
    font-weight: 400;
  }
}
</style>

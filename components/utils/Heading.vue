<template>
<div class='is-heading py-2'>
  <div class="heading">{{title}}</div>
  <p class="block"><slot/></p>
</div>
</template>

<script>
export default {
  name: 'Heading',
  props: ['title']
}
</script>

<style lang="scss" scoped>
.is-heading {
  p.block {
    font-size: 14px !important;
  }
}
</style>
<template>
  <span @click="$emit('toggle')" class="navbar-burger burger pt-4">
    <i class="fas fa-rocket"></i>
  </span>
</template>

<script>
export default {
  name: 'Hamburger',
}
</script>

<style lang="scss" scoped>
.navbar-burger {
  text-align: center;
}
</style>

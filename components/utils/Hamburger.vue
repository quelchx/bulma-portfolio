<template>
  <span @click="$emit('toggle')" class="navbar-burger burger">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </span>
</template>

<script>
export default {
    name: 'Hamburger'
};
</script>
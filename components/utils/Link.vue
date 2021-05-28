<template>
  <a :href="path" target="_blank" class="pt-1">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'Link',
  props: ['path'],
}
</script>

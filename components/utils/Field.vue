<template>
  <div class="field">
    <label :for="label" class="label">{{ name }}</label>
    <div class="control">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Field',
  props: {
    label: {
      type: String,
      required: false,
      default: null,
    },
    name: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>

<style lang="scss">



</style>

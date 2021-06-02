<template>
  <b-tooltip :label="message" position="is-bottom" type="is-dark">
    <slot></slot>
  </b-tooltip>
</template>

<script>
export default {
  props: ["message"]
};
</script>
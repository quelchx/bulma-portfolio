<template>
  <div
    :data-aos="animation"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AOS',
  props: ['animation'],
}
</script>

<template>
  <section class="hero is-white is-fullheight">
    <div class="hero-body">
      <div class="container">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

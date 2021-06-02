<template>
  <form @submit.prevent="func(id)">
    <div :class="modal">
      <div class="modal-background" @click="toggle"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Edit Post</p>
          <button
            @click.prevent="toggle"
            class="delete"
            aria-label="close"
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <!-- <textarea class="textarea" rows="10" v-model="edit.post"></textarea> -->
            <slot />
          </div>
          <div class="field">
            <p v-if="feedback">{{ feedback }}</p>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button type="submit" class="button is-success">
            Save changes
          </button>
          <button @click.prevent="clear" class="button">
            Clear
          </button>
        </footer>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'EditComment',
  props: ['func', 'id', 'toggle', 'feedback', 'clear', 'modal']
}
</script>

<style></style>

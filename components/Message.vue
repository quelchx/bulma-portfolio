<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img
        class='invert'
          src="https://cdn.iconscout.com/icon/free/png-256/comment-2551199-2136583.png"
        />
      </p>
    </figure>
    <form @submit.prevent="func" class="media-content">
      <div class="field">
        <p class="control">
          <slot />
        </p>
      </div>
      <div v-if="feedback" class="field">
        <div class="delete" @click="feedback = !feedback" />
        You must enter a message in order to submit your comment
      </div>
      <div class="field">
        <p class="control">
          <button type="submit" :disabled="!user.loggedIn" class="button">
            Post comment
          </button>
        </p>
      </div>
    </form>
  </article>
</template>

<script>
export default {
  name: 'Message',
  props: ['func', 'feedback', 'user'],
}
</script>
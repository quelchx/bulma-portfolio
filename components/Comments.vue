<template>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>{{ comment.user }}</strong>
        <br />
        {{ comment.post }}
        <br />
        <small>
          <a><i class="fas fa-heart"></i></a>
          <a><i class="fas fa-reply"></i></a>

          <a @click="func(post, id)" v-if="user === email.data.email">
            <i class="fas fa-edit"></i>
          </a>

          <a @click='removed(id)' v-if="user === email.data.email">
            <i class="fas fa-trash"></i>
          </a>

          <span>{{ comment.timestamp }}</span>
        </small>
      </p>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    comment: { type: Object },
    email: { type: Object },
    func: { type: Function },
    id: { type: String },
    post: { type: String },
    user: { type: String },
    removed: { type: Function },
  },
}
</script>

<style></style>

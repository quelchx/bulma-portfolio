<template>
  <section class="container" style="padding-bottom: 140px;">
    <div class="has-text-centered pt-6">
      <h1 class="title">Welcome Back</h1>
      <h2 class="subtitle">Need to Login?</h2>
    </div>
    <div class="columns section">
      <AOS animation="fade-right" class="column is-6 py-6">
        <p class="heading pl-1">Welcome Back</p>
        <form @submit.prevent="login">
          <div class="pt-4 column is-10">
            <Field name="Username" label="name">
              <p class="control has-icons-left has-icons-right">
                <input
                  v-model="user.email"
                  class="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span
                  v-if="user.email.length > 0"
                  class="icon is-small is-right"
                >
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </Field>
            <Field name="Password" label="name">
              <p class="control has-icons-left">
                <input
                  v-model="user.password"
                  class="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
                <span
                  v-if="user.password.length >= 8"
                  class="icon is-small is-right"
                >
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </Field>
            <div class="field">
              <p class="control">
                <button type="submit" class="button is-success">
                  Login
                </button>
              </p>
            </div>
          </div>
        </form>
      </AOS>
      <AOS animation="fade-right" v-if="error" class="column is-half">
        <div class="heading">Error</div>
        <p>
          <strong>Sign In Error</strong>
        </p>
        <p>
          Something went wrong or your credentials do not match
          <br />
          If you need to sign up,
          <nuxt-link id="strikeout" to="/">register</nuxt-link> a new account
          quickly and easily.
        </p>

        <p class="block">Having Issues?</p>
        <p class="block">
          If you are having difficulties, can't sign in, or forgot your
          password.
          <br />
          Please visit the
          <nuxt-link to="/contact" id="strikeout">contact page</nuxt-link>
          page to resolve any on going problems.
        </p>
      </AOS>
      <AOS animation="fade-left" v-else class="column is-half pt-6">
        <Heading title="signup and register">
          <strong>Not registered?</strong>
          <br />
          Please visit
          <nuxt-link to="/register" id="strikeout">here</nuxt-link> to sign up.
        </Heading>
        <Heading title="having issues?">
          If you are having difficulties, or forgot your password; please visit
          the <nuxt-link id="strikeout" to="/contact">contact page</nuxt-link>
          page to resolve any on going problems.
        </Heading>
      </AOS>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase'
import AOS from '../components/AOS.vue'
import Field from '../components/utils/Field.vue'
import Heading from '../components/utils/Heading.vue'
export default {
  components: { Field, AOS, Heading },
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      error: null,
    }
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then((data) => {
          this.$router.push('/blog')
        })
        .catch((err) => (this.error = err.message))
    },
  },
}
</script>

<style></style>

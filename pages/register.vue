<template>
  <section class="mt-3 container is-fluid" style="padding-bottom: 140px">
    <div class="columns pb-6">
      <AOS animation="fade-up" class="column is-4 is-offset-1">
        <Heading title="Why Register">
          Make an account an take advantage of recieving the latest news and
          articles.
        </Heading>
        <Heading title="Is It Safe?">
          Your password and information is safe from myself and others!
          Everything is handled through Google's Firebase services!
        </Heading>
        <Heading title="What Do I Get?">
          I write and cover a vast array of topics, but mainly talk about Vue.
          You will have access to examples of code all taken from over 3 years
          of research and experience.
        </Heading>
        <Heading title="Patreon">
          You don't have to dontate, but anything does help a lot more than you
          might think! Most articles and examples are completley free. If you
          donate -- you will recieve full access to my private github
          repositories and code examples that should help you get on a quicker
          pace to landing your first job!
        </Heading>
        <Heading title="Donate?">
          If your feeling generous you can donate
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.paypal.com/donate?hosted_button_id=U3Z4B6SDYDDSS"
            >here</a
          >
          or become a patreon by subscribing here (coming soon!).
        </Heading>
      </AOS>
      <AOS animation="fade-down" class="column is-5 is-offset-1">
        <Heading title="register your account">
          Need an account? New user? Not a problem.
        </Heading>
        <Heading title="It's safe -- its free">
          All authentification is handled by Google and is safe and secure. For
          more information about how this authenification system works please
          click <nuxt-link id="strikeout" to="/information">here</nuxt-link> for
          further details.
        </Heading>
        <form action="#" @submit.prevent="register">
          <Field label="name" name="Username">
            <input
              name="name"
              v-model="form.name"
              type="text"
              placeholder="Username"
              class="input"
            />
          </Field>
          <Field label="email" name="Email">
            <input
              name="email"
              v-model="form.email"
              type="email"
              placeholder="Email Address"
              class="input"
            />
          </Field>
          <Field label="password" name="Password">
            <input
              name="password"
              v-model="form.password"
              type="password"
              placeholder="Password"
              :class="'input ' + danger"
            />
          </Field>
          <Field label="confirm" name="Confirm password">
            <input
              name="confirm"
              v-model="confirm"
              type="password"
              placeholder="Again..."
              :class="'input ' + danger"
            />
          </Field>
          <div class="field">
            <p v-if="feedback">
              <strong>{{ message }}</strong>
            </p>
            <p v-if="error">
              {{ error }}
            </p>
          </div>
          <div class="buttons">
            <input type="submit" value="Submit" class="button is-primary" />
            <a @click="clear" class="button is-danger">
              Cancel
            </a>
          </div>
        </form>
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
  name: 'Register',
  components: { Field, Heading, AOS },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
      message: '',
      confirm: '',
      error: null,
      feedback: false,
      danger: '',
    }
  },
  methods: {
    clear() {
      return ([
        this.form.name,
        this.form.email,
        this.form.password,
        this.confirm,
      ] = '')
    },
    register() {
      // conditional checks
      if (this.form.password != this.confirm) {
        this.danger = 'is-danger'
        this.message = "Password's do not match"
        return (this.feedback = !this.feedback)
      } else if (this.form.name == '') {
        this.message = 'You must enter a username'
      } else if (this.form.password.length < 8) {
        this.danger = 'is-danger'
        this.message = 'Password needs to be greater than 8 characters'
        return (this.feedback = !this.feedback)
      } else if (this.form.password == this.confirm) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then((data) => {
            data.user
              .updateProfile({
                displayName: this.form.name,
                email: this.form.email,
                member: false,
              })
              .then(() => {
                this.$router.push('/blog') // redirect to a success page eventually
              })
          })
          .catch((err) => {
            this.error = err.message
          })
      } else {
        return (this.feedback = true), (this.message = ''), (this.danger = '')
      }
    },
  },
}
</script>

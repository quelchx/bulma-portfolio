<template>
  <section class="container is-max-desktop">
    <Hero>
      <div class="columns is-centered">
        <AOS
          animation="fade-right"
          class="column is-10-mobile is-offset-1-mobile pt-5"
        >
          <img
            :src="require('~/assets/svg/undraw_contact_us_15o2.svg')"
            alt="contact"
            class="contact-image"
          />
          <h1 class="title titled is-2">Wanna Talk?</h1>
          <h2 class="subtitle subtitled is-4">
            Have a question? Feel free to contact me here or reach out to me on
            social media.
          </h2>
          <SocialLinks />
        </AOS>
        <AOS
          animation="fade-left"
          class="column is-5 is-offset-1 is-10-mobile is-offset-1-mobile"
        >
          <Form />
        </AOS>
      </div>
    </Hero>
  </section>
</template>

<script>
import Hero from '../components/Hero.vue'
import Form from '../components/plugin/Form.vue'
import AOS from '../components/AOS.vue'
import SocialLinks from '../components/SocialLinks.vue'

import meta from '~/api/meta'
export default {
  components: { Hero, AOS, Form, SocialLinks },
  head() {
    return {
      title: 'Contact Eric Quelch',
      titleTemplate: 'Contact Eric Quelch',
      meta: meta.contact,
    }
  },
}
</script>

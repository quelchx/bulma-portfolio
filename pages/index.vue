<template>
  <div>
    <Hero>
      <div class="columns is-vcentered reverse-columns mb-6 pb-6">
        <AOS
          animation="fade-right"
          class="
            column
            is-10-mobile
            is-6-tablet
            is-offset-1-tablet
            is-5-desktop
            is-offset-1-desktop
            is-5-widescreen
            is-offset-1-widescreen
            is-5-fullhd
            is-offset-1-fullhd
          "
        >
          <AOS
            animation="fade-down"
            id="strikeout"
            class="title titled is-1 mb-5"
            >quelch()</AOS
          >
          <AOS
            animation="fade-up"
            class="
              subtitle
              has-text-grey
              is-4
              has-text-weight-normal
              is-family-sans-serif
            "
          >
            <TypeWriter
              class="is-typed"
              :array="arr"
              :eraseSpeed="60"
              :typeSpeed="90"
              :delay="1000"
            >
              Eric Quelch:
            </TypeWriter>
          </AOS>
          <div class="buttons">
            <AOS animation="fade-left" class="button is-info">
              <a
                href="https://raw.githubusercontent.com/quelchx/quelchx/main/Resume.pdf"
                target="_blank"
                >.resume()</a
              >
            </AOS>
            <AOS animation="fade-right" class="button is-dark">
              <a href="mailto:quelchx@gmail.com">.email()</a>
            </AOS>
          </div>
        </AOS>
        <AOS
          animation="fade-left"
          class="
            column
            is-10-mobile
            is-4-tablet
            is-offset-1-tablet
            is-4-desktop
            is-offset-1-desktop
            is-4-widescreen
            is-offset-1-widescreen
            is-4-fullhd
            is-offset-1-fullhd
          "
        >
          <figure class="image is-square">
            <img
              @click="egg"
              class="is-rounded is-avatar"
              src="https://avatars.githubusercontent.com/u/74473426?s=400&u=94e992403ea014f3a5e82cae22d7c070af8e4df2&v=4"
            />
          </figure>
        </AOS>
      </div>
    </Hero>

    <Hero>
      <div class="columns is-vcentered my-6">
        <AOS
          animation="fade-right"
          class="
            column
            is-12-mobile
            is-5-tablet
            is-offset-1-tablet
            is-5-desktop
            is-offset-1-desktop
            is-5-widescreen
            is-offset-1-widescreen
            is-5-fullhd
            is-offset-1-fullhd
          "
        >
          <figure class="image has-logo">
            <VueLogo class="is-logo" />
          </figure>
        </AOS>
        <AOS
          animation="fade-left"
          class="
            column
            is-12-mobile
            is-4-tablet
            is-offset-1-tablet
            is-5-desktop
            is-offset-1-desktop
            is-5-widescreen
            is-offset-1-widescreen
            is-4-fullhd
            is-offset-1-fullhd
          "
        >
          <h1 class="titled title mb-6">My Stack</h1>
          <h2 class="block subtitle">
            When it comes to creating a web application -- I enjoy using
            technologies such as Vue.js. Check out a starting template I created for Vue called <strong>Nimble</strong>
          </h2>
          <p class="block subtitle">
            It is based of Vite for Vue.js; Check it out to get the ball rolling
            quickly for your next Vue.js project! Out of the box it includes popular Vue packages such as Vuex and Vue Router preconfigured. 
          </p>
          <p class="block subtitle">
            Run <code>npx degit quelchx/nimble app</code> to try it out!
          </p>
          <AOS animation="fade-down" class="button is-dark">
            <a href="https://github.com/quelchx/nimble" target="_blank"
              >.nimble()</a
            >
          </AOS>
        </AOS>
      </div>
    </Hero>

    <Hero>
      <div class="columns is-vcentered reverse-columns py-5">
        <AOS
          animation="fade-right"
          class="
            column
            is-8-mobile
            is-4-tablet
            is-offset-1-tablet
            is-4-desktop
            is-offset-1-desktop
            is-5-widescreen
            is-offset-1-widescreen
            is-4-fullhd
            is-offset-1-fullhd
          "
        >
          <h1 class="title titled is-1 mb-6">Follow me on GitHub</h1>
          <h2 class="subtitle subtitled">
            Check out some of the work I'm currently doing on GitHub -- I'm very
            active.
          </h2>

          <SocialLinks />
        </AOS>

        <AOS
          animation="fade-left"
          class="
            column
            is-8-mobile
            is-6-tablet
            is-offset-1-tablet
            is-6-desktop
            is-5-widescreen
            is-4-fullhd
            is-offset-2-fullhd
          "
        >
          <figure class="image has-logo">
            <GithubLogo class="is-logo" />
          </figure>
        </AOS>
      </div>
    </Hero>

    <Hero>
      <div class="columns is-centered">
        <AOS
          animation="fade-up"
          class="column is-10 is-8-mobile is-offset-2-mobile"
        >
          <h1 class="title is-typed is-1 mb-6">
            <TypeWriter
              :array="looking"
              :eraseSpeed="200"
              :typeSpeed="150"
              :delay="1000"
            >
              Are you looking for:
            </TypeWriter>
          </h1>
          <h2 class="subtitle subtitled">
            I'm currently availible for hire! Feel free to reach out to me by
            emailing me through this
            <a class="is-link" id="strikeout" href="mailto:quelchx@gmail.com"
              >link</a
            >, or you can drop a message on the contact form
            <router-link class="is-link" id="strikeout" to="/contact"
              >here</router-link
            >.
          </h2>
        </AOS>
      </div>
      <div v-if="solved">
        <div
          id="modal"
          class="modal"
          :class="(solved = solved ? 'is-active' : '')"
        >
          <div class="modal-background"></div>
          <div class="modal-content">
            <div class="box">
              Gotta love that face, cute dog too eh? <br />
              Congratz you found the hidden easter egg!
            </div>
          </div>
          <button
            class="modal-close is-large"
            @click="close"
            aria-label="close"
          ></button>
        </div>
      </div>
    </Hero>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import AOS from '@/components/AOS.vue'
import VueLogo from '@/assets/VueLogo.vue'
import TypeWriter from '@/components/utils/TypeWriter.vue'
import GithubLogo from '@/assets/GithubLogo.vue'
import SocialLinks from '@/components/SocialLinks.vue'

export default {
  head() {
    return {
      meta: [
        {
          hid: `Eric Quelch's personal portfolio and resume`,
          name: `Eric Quelch's landing page for personal portfolio and resume`,
          content: `Information about Eric Quelch and his experience with web development`,
        },
      ],
    }
  },
  components: {
    AOS,
    Hero,
    TypeWriter,
    VueLogo,
    GithubLogo,
    SocialLinks,
  },
  data() {
    return {
      arr: [
        'Full Stack Web Developer',
        'Tutor',
        'Geek',
        'Team Leader',
        'Is Hilarious',
        'Passionate',
        'Dedicated',
        'I am Eric Quelch',
      ],
      looking: [
        'developer and design',
        'illustrations, animations and effects',
        'search engine optimization',
        'backend solutions, authorization, security',
        'e-commerence and payment methods',
        'leadership, support, problem solving, and clever thinking',
        'I am much, much more -- improving each and everyday!',
      ],
      counter: 0,
      solved: false,
    }
  },
  methods: {
    egg() {
      console.log(this.counter)
      this.counter++
      if (this.counter >= 10) {
        return (this.solved = !this.solved), (this.counter = 0)
      }
    },
    close() {
      document.querySelector('#modal').className = 'modal'
      return (this.solved = !this.solved)
    },
  },
}
</script>

<style lang="scss">
code {
  background-color: #d6d6d6 !important;
  color: #476333 !important;
  border-radius: 5px !important;
}

@media (max-width: 1200px) {
  .has-logo {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .is-logo {
    width: 400px;
    height: 400px;
  }
}
</style>

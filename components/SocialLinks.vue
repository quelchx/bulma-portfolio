<template>
  <div class="buttons">
    <AOS animation="fade-down" class="button is-dark">
      <Link path="https://github.com/quelchx">
        <GithubLogo width="28" height="28" filter="invert(1)" />
      </Link>
    </AOS>
    <AOS animation="fade-up" class="button is-link">
      <Link path="">
        <LinkedinLogo width="28" height="28" />
      </Link>
    </AOS>
    <AOS animation="fade-down" class="button is-info">
      <Link path="https://twitter.com/ericquelch">
        <TwitterLogo width="28" height="28" filter="invert(1)" />
      </Link>
    </AOS>
  </div>
</template>

<script>
import AOS from './AOS.vue'
import Link from './utils/Link.vue'
import GithubLogo from '../assets/GithubLogo.vue'
import LinkedinLogo from '../assets/LinkedinLogo.vue'
import TwitterLogo from '../assets/TwitterLogo.vue'

export default {
  name: 'SocialLinks',
  components: { AOS, GithubLogo, LinkedinLogo, TwitterLogo, Link },
}
</script>

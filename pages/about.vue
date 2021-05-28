<template>
  <section>
    <AOS
      animation="fade-down"
      class="featured container is-max-desktop section"
    >
      <AOS animation="slide-left" class="level">
        <div class="level-left">
          <div class="level-item">
            <h2 class="subtitle subtitled">Projects of Mine</h2>
          </div>
        </div>
      </AOS>

      <div class="columns">
        <div
          class="column is-3"
          v-for="(article, index) in articles"
          :key="index"
        >
          <Article
            :title="article.title"
            :path="article.path"
            :desc="article.desc"
          />
        </div>
      </div>
    </AOS>

    <AOS
      animation="fade-up"
      class="categories container is-max-desktop section mb-4"
    >
      <AOS animation="slide-right" class="subtitle subtitled">
        Web application was made with:
      </AOS>
      <div class="columns is-multiline">
        <Category title="Libaries/Frameworks" subtitle="5 used">
          <div v-for="(item, index) in lib" :key="index">
            <AOS animation="fade-in">
              <li><Chevron /> {{ item }}</li>
            </AOS>
          </div>
        </Category>
        <Category
          title="Files"
          path="https://github.com/quelchx/portfolio"
          link="https://github.com/quelchx/portfolio"
        >
          <div v-for="(file, index) in files" :key="index">
            <AOS animation="fade-in">
              <li><Chevron /> {{ file }}</li>
            </AOS>
          </div>
        </Category>
        <Category
          class="mb-6"
          title="Power Ups"
          subtitle="Find the easter egg?"
        >
          <div v-for="(item, index) in other" :key="index">
            <AOS animation="fade-in">
              <li><Chevron /> {{ item }}</li>
            </AOS>
          </div>
        </Category>
          <Category class='mb-6' title='Experienced With' subtitle='Assets'>
            <div v-for="(item, index) in assets" :key="index">
              <AOS animation="fade-in">
                <li><Chevron /> {{ item }}</li>
              </AOS>
            </div>
        </Category>
      </div>
    </AOS>
  </section>
</template>

<script>
import Chevron from '../assets/Chevron.vue'
import Article from '../components/Article.vue'
import Category from '../components/Category.vue'
import AOS from '../components/AOS.vue'
export default {
  head() {
    return {
      title: 'About Eric Quelch',
      titleTemplate: 'About Eric Quelch',
       meta: [
        {
          hid: `Eric Quelch - Contact`,
          name: `About Eric Quelch`,
          content: `Information about Eric Quelch`
        }
      ]
    }
  },
  components: { Chevron, Article, Category, AOS },
  data() {
    return {
      articles: [
        {
          title: 'The Beleaf',
          path: 'https://the-beleaf.netlify.app/',
          desc: 'Toronto Maple Leafs News',
        },
        {
          title: 'And Then Delivery',
          path: 'https://andthendelivery.netlify.app/',
          desc: 'Delivery Service And Information',
        },
        {
          title: 'Perty UI Theme',
          path: 'https://marketplace.visualstudio.com/items?itemName=ericquelch.perty',
          desc: 'Visual Studio Code Editor Theme',
        },
        {
          title: 'Meme Royale',
          path: 'https://github.com/quelchx',
          desc: 'Platform for Memes',
        },
      ],
      lib: ['Vue', 'Vite', 'Bulma', 'Sass', 'AOS'],
      files: [
        '60+ files',
        '1.9MB',
        '100+ hours of thinking and testing',
        '30+ hours of coding',
        '200+ hours of research',
      ],
      other: [
        '4 pots of coffee',
        '28+ cups of java',
        '50+ teaspoons of sugar',
        'Added 1 Easter Egg',
      ],
      assets: [
        'Reactjs, Nextjs',
        'Vuejs, Nuxtjs',
        "Sass, CSS, HTML",
        'Git, Github',
        'Nodejs, MongoDB, Firebase',
        'WordPress, PHP, Strapi',
        'Three.js, GSAP, And more...'
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
svg {
  width: 16px;
  height: 16px;
}
</style>

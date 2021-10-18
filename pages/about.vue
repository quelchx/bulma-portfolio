<template>
  <section>
    <div class="container is-max-desktop">
      <section class="hero">
        <div class="hero-body">
          <p class="title">Hello <span id="strikeout">World</span></p>
          <p class="subtitle">
            Thanks for stopping by.
          </p>
          <AOS animation="fade-down" class="section">
            <img
              :src="require('~/assets/svg/undraw_profile_details_f8b7.svg')"
              alt="profile-svg"
            />
          </AOS>
          <AOS animation="fade-up" class="content">
            <p>
              My name is Eric Quelch, and I'm an inspiring full-stack developer
              currently living in London, Ontario. I have been developing for
              close to four years now and love what I do. I'm very passionate
              and am always trying to expand my skillset.
            </p>
            <p>
              Outside of developing I enjoy fishing very much. I'm an avid
              angler that enjoys fishing for bass (mainly smallmouths). In my
              spare time most likely I will be out on the local rivers.
            </p>

            <p>
              For more information about myself feel free to drop a message
              anytime. Until then take care!
            </p>
          </AOS>
        </div>
      </section>
    </div>
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
        <div class="column" v-for="(article, index) in articles" :key="index">
          <Article
            :title="article.title"
            :path="article.path"
            :desc="article.desc"
            :img="article.img"
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
        <Category title="Libaries/Frameworks" :subtitle="lib.length + '  used'">
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
        <Category class="mb-6" title="Experienced With" subtitle="Assets">
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

import articles from '~/api/articles'
import meta from '~/api/meta'

export default {
  head() {
    return {
      title: 'About Eric Quelch',
      titleTemplate: 'About Eric Quelch',
      meta: meta.about,
    }
  },
  components: { Chevron, Article, Category, AOS },
  data() {
    return {
      articles: articles.work,
      lib: articles.library,
      files: articles.files,
      other: articles.other,
      assets: articles.assets,
    }
  },
}
</script>

<style lang="scss" scoped>
svg {
  width: 16px;
  height: 16px;
}
// .carousel-images {
//   max-width: 800px;
//   max-height: 800px;
//   border-radius: 10px;
// }
</style>

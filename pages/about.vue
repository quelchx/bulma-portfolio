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
          class="column"
          v-for="(article, index) in articles"
          :key="index"
        >
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
export default {
  head() {
    return {
      title: 'About Eric Quelch',
      titleTemplate: 'About Eric Quelch',
      meta: [
        {
          hid: `Information about Eric Quelch - Projects and Contributions`,
          name: `About Eric Quelch`,
          content: `Information about Eric Quelch`,
        },
      ],
    }
  },
  components: { Chevron, Article, Category, AOS },
  data() {
    return {
      articles: [
        {
          title: 'Vue Writer',
          path: 'https://www.npmjs.com/package/vue-writer',
          desc: 'Vue 3 type writer component',
          img:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--5NzZEMLS--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/7pryn9ls88giuc9m8cau.png',
        },
        {
          title: 'The Beleaf',
          path: 'https://the-beleaf.netlify.app/',
          desc: 'Toronto Maple Leafs News',
          img:
            'https://cdn.shopify.com/s/files/1/2534/8132/products/ABPID09176-Toronto_20Maple_20Leafs_20Logo_20Professional_20Ice_20Hockey_20Team_20Toronto_20Ontario-convert-20200918020807011211_386ab665-f454-4821-9719-8ddf7782c8c3_1024x1024.jpg?v=1613766574',
        },
        {
          title: 'And Then Delivery',
          path: 'https://andthendelivery.netlify.app/',
          desc: 'Delivery Service And Information',
          img:
            'https://3xo4di2xpixr3oltj74229w9-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/route-optimization-enhances-main.jpg',
        },
        {
          title: 'Perty UI Theme',
          path:
            'https://marketplace.visualstudio.com/items?itemName=ericquelch.perty',
          desc: 'Visual Studio Code Editor Theme',
          img: 'https://miro.medium.com/max/596/0*UyRcj2N9_z946tNH.png',
        },
        {
          title: 'Meme Royale',
          path: 'https://github.com/quelchx',
          desc: 'Platform for Memes',
          img:
            'https://static.wixstatic.com/media/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png/v1/fill/w_1000,h_571,al_c,usm_0.66_1.00_0.01/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png',
        },
      ],
      lib: [
        'Nuxt.js',
        'Buefy',
        'Sass',
        'AOS.js',
        'Marked.js',
        'Firebase',
        'Strapi CMS',
        'Vuex',
        'Netlify',
        'Heroku',
        'MongoDB',
      ],
      files: [
        '60+ files',
        '2.1MB',
        '100+ hours of thinking and testing',
        '50+ hours of coding',
        'countless hours of research',
      ],
      other: [
        'Lost track of pots of coffee',
        'Insane amount of cups of java',
        'Heart attack amounts of sugar',
        'Added 1 Easter Egg for you to find',
      ],
      assets: [
        'Reactjs, Nextjs',
        'Vuejs, Nuxtjs',
        'Sass, CSS, HTML',
        'Git, Github',
        'Nodejs, MongoDB, Firebase',
        'WordPress, PHP, Strapi',
        'Three.js, GSAP, And more...',
      ],
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

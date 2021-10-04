<template>
  <section>
    <div class="container is-max-desktop">
      <section class="hero">
        <div class="hero-body">
          <p class="title">Hello <span id="strikeout">World</span></p>
          <p class="subtitle">
            Thanks for stopping by.
          </p>
          <div class="content">
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
          </div>
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
          title: 'Perty UI Theme',
          path:
            'https://marketplace.visualstudio.com/items?itemName=ericquelch.perty',
          desc: 'Visual Studio Code Editor Theme',
          img: 'https://miro.medium.com/max/596/0*UyRcj2N9_z946tNH.png',
        },
        {
          title: 'AOS-Vue',
          path: 'https://www.npmjs.com/package/vue-writer',
          desc: 'Animate on scroll component package for Vue 3',
          img:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--5NzZEMLS--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/7pryn9ls88giuc9m8cau.png',
        },
        {
          title: 'And Then Delivery',
          path: 'https://andthendelivery.netlify.app/',
          desc: 'Delivery Service And Information',
          img:
            'https://media.istockphoto.com/vectors/home-delivery-shipping-on-scooter-in-smartphone-design-transport-food-vector-id1214136128?k=20&m=1214136128&s=612x612&w=0&h=5wFTQazZRJuA9pnj_oJH-DdBCbk4LhnqQ4EraAuOI7Q=',
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
        'Reactjs, Nextjs, React-Native, Expo',
        'Vuejs, Nuxtjs, Vuex, Vue-Router',
        'Angular, Angular CLI Typescript',
        'Java, Python, C#',
        'Sass, CSS, HTML',
        'Git, Github, Github CLI',
        'Nodejs, MongoDB, Firebase',
        'WordPress, PHP, Strapi',
        'Three.js, GSAP, and much more...',
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

.carousel-images {
  max-width: 800px;
  max-height: 800px;
  border-radius: 10px;
}
</style>

export default {
  target: "static",
  ssr: false,
  head: {
    title: "Eric Quelch",
    titleTemplate: "Full Stack Developer",
    htmlAttrs: {
      lang: "en",
      amp: true
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "Eric Quelch - Full Stack Developer",
        name: "Personal Portfolio + Resume",
        content: "Information about Eric Quelch - Full Stack Developer"
      }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/15181efa86.js" // currently not in use 
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["@/style/main.scss"],
  loading: { color: "#0075d7", height: "3px" }, // currently not in use (client side loading => this resolves loading for server side rendering I think)
  components: false,
  generate: {
    fallback: true
  },
  modules: ["@nuxtjs/pwa", 'nuxt-buefy',],
  plugins: [],
  env: {
    url: process.env.HEROKU_API
  },
  pwa: {
    // have to assign a custom icon for this eventually
    icon: {
      iconFileName:
        process.env.NODE_ENV === "staging" ? "icon.png" : "favicon.ico"
    },
    meta: {
      name: "Eric Quelch Personal Portfolio + Resume"
    }
  },
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
};

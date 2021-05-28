export default {
  target: "static",
  ssr: false,
  head: {
    title: "Title",
    titleTemplate: "Title Template",
    htmlAttrs: {
      lang: "en",
      amp: true
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "HID",
        name: "Name",
        content: "Content Description"
      }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/15181efa86.js"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["@/style/main.scss"],
  loading: { color: "#0075d7", height: "3px" },
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
    icon: {
      iconFileName:
        process.env.NODE_ENV === "staging" ? "icon.png" : "favicon.ico"
    },
    meta: {
      name: "PWA Meta"
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

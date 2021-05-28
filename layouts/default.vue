<template>
  <main id="main">
    <div class="container is-fluid">
      <Navbar @display="toggle = !toggle" />
    </div>
    <Sidebar :show="toggle" @close="toggle = false" />
      <Nuxt />
    <Footer />
  </main>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/global/Navbar.vue";
import Sidebar from "@/components/global/Sidebar.vue";
import Footer from "@/components/global/Footer.vue";

export default {
  /** @beforeCreate is to help heroku and mongodb start up so blog page loads content a bit faster -> eventually convert this to a possible state? */
  async beforeCreate() {
    let res = await fetch(process.env.url);
  },
  mounted() {
    AOS.init({});
    AOS.refresh();
  },
  components: { Navbar, Sidebar, Footer },
  data() {
    return { toggle: false };
  }
};
</script>

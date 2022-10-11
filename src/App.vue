<template>
  <Topbar />
  <Logobar />
  <Footer />
  <Up />
</template>
<script>
import Topbar from "./components/Header/topbar.vue";
import Logobar from "./components/Header/logobar.vue";
import Footer from "./components/Footer/Footer.vue";
import Up from "./components/UpToTop/Up.vue";
export default {
  components: { Topbar, Logobar, Footer, Up },
};
</script>
<style lang="scss">
</style>

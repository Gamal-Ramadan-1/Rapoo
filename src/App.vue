<template>
  <Topbar />
  <Logobar />
  <Footer />
</template>
<script>
import Topbar from "./components/Header/topbar.vue";
import Logobar from "./components/Header/logobar.vue";
import Footer from "./components/Footer/Footer.vue";
export default {
  components: { Topbar, Logobar, Footer },
};
</script>
<style lang="scss">
</style>

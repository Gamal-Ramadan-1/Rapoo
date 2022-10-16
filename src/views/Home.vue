<template>
  <SliderHome />
  <Service />
  <Process />
</template>
<script>
import SliderHome from "@/components/Sliders/SliderHome.vue";
import Service from "../components/Service/Service.vue";
import Head from "@/components/HeaderAllSections/Head.vue";
import Process from "@/components/Process/Process.vue";
export default {
  name: "Home-1",
  components: { SliderHome, Service, Head, Process },
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
</style>
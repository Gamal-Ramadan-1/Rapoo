<template>
  <SliderHome />
  <Service />
  <Process />
  <Services2 />
  <Pricing />
  <Projects />
</template>
<script>
import SliderHome from "@/components/Sliders/SliderHome.vue";
import Service from "../components/Service/Service.vue";
import Head from "@/components/HeaderAllSections/Head.vue";
import Process from "@/components/Process/Process.vue";
import Services2 from "@/components/WebServices/Services2.vue";
import Pricing from "@/components/Pricing/Pricing.vue";
import Projects from "@/components/Projects/Projects.vue";
export default {
  name: "Home-1",
  components: {
    SliderHome,
    Service,
    Head,
    Process,
    Services2,
    Pricing,
    Projects,
  },
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
</style>
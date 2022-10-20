<template>
  <SliderHome />
  <Service />
  <Process />
  <Services2 />
  <Pricing />
  <Projects />
  <Testimonial />
  <OurNews />
</template>
<script>
import SliderHome from "@/components/Sliders/SliderHome.vue";
import Service from "../components/Service/Service.vue";
import Head from "@/components/HeaderAllSections/Head.vue";
import Process from "@/components/Process/Process.vue";
import Services2 from "@/components/WebServices/Services2.vue";
import Pricing from "@/components/Pricing/Pricing.vue";
import Projects from "@/components/Projects/Projects.vue";
import Testimonial from "@/components/Testimonial/Testimonial.vue";
import OurNews from "@/components/OurNews/OurNews.vue";
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
    Testimonial,
    OurNews,
  },
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
</style>
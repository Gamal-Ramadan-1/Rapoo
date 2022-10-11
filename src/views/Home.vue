<template>
  <SliderHome />
  <Service />
</template>
<script>
import SliderHome from "@/components/Sliders/SliderHome.vue";
import Service from "../components/Service/Service.vue";
export default {
  name: "Home-1",
  components: { SliderHome, Service },
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
</style>
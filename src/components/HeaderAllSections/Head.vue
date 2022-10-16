<template>
  <div class="row">
    <div class="col-12 text-center">
      <h1 class="text-capitalize my-2">{{ MainHead }}</h1>
      <p class="text-capitalize my-2">
        {{ Descripsion }}
        <span class="d-lg-block d-inline">{{ Remainder }}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Head",
  props: {
    MainHead: String,
    Descripsion: String,
    Remainder: String,
  },
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
</style>
<template>
  <a href="#" @click="toTop()" v-show="scY > 150">
    <i class="fa-solid fa-angle-up"></i>
  </a>
</template>
<script>
export default {
  name: "Up",
  data() {
    return {
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      this.scY = window.scrollY;
    },
    toTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
a {
  padding: 20px 25px;
  position: fixed;
  z-index: 1000;
  bottom: 10px;
  right: 10px;
  color: white;
  background-color: $Green;
  border-radius: 50%;
}
a:hover {
  color: white;
}
</style>
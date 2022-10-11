<template>
  <footer class="py-5">
    <Layout />
    <div class="container">
      <div class="row">
        <div class="col-lg-4 logo-footer">
          <p class="mb-3">
            <a href="#" class="text-light">Rapoo</a>
          </p>
          <p>
            Each theme featured at the Bootstrap marketplace has been reviewed
            by Bootstrap's creators.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </p>
        </div>
        <div class="col-lg-3"></div>
        <div class="col-lg-2"></div>
        <div class="col-lg-3"></div>
      </div>
    </div>
  </footer>
</template>
<script>
import Layout from "../Layout/Layout.vue";
export default {
  name: "Footer",
  components: { Layout },
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
a {
  text-decoration: none;
}
footer {
  position: relative;
  z-index: 0;
  background-image: url("@/Imgs/Footer.jpg");
  clear: both;
  background-position: 50%;
  background-size: cover;
  .logo-footer {
    p {
      a {
        font-size: 32px;
      }
    }
    p {
      color: gray;
      line-height: 2;
      font-size: 14px;
      width: 85%;
    }
  }
}
</style>
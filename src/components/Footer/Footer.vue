<template>
  <footer class="py-5">
    <Layout />
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-12 col-sm-12 logo-footer">
          <h2 class="mb-4 headers-footer">
            <a href="#" class="text-light">Rapoo</a>
          </h2>
          <p>
            Each theme featured at the Bootstrap marketplace has been reviewed
            by Bootstrap's creators.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </p>
        </div>
        <div class="col-lg-3 col-md-12 col-sm-12 account">
          <h2 class="mb-4 headers-footer text-light text-capitalize fw-bold">
            account
          </h2>
          <p v-for="accountlink of accountlinks" :key="accountlink">
            <a href="#" class="text-capitalize">{{ accountlink }}</a>
          </p>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-12 about">
          <h2 class="mb-4 headers-footer text-light text-capitalize fw-bold">
            account
          </h2>
          <p v-for="aboutlink of aboutlinks" :key="aboutlink">
            <a href="#" class="text-capitalize">{{ aboutlink }}</a>
          </p>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12"></div>
      </div>
    </div>
  </footer>
</template>
<script>
import Layout from "../Layout/Layout.vue";
export default {
  name: "Footer",
  components: { Layout },
  data() {
    return {
      accountlinks: [
        "terms and conditions",
        "privacy policy",
        "affiliate services",
        "help and support",
        "frequently asked question",
      ],
      aboutlinks: [
        "services",
        "about us",
        "pricing",
        "products shop",
        "contact",
      ],
    };
  },
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
    .headers-footer {
      h2 {
        font-size: 28px;
      }
    }
    p {
      color: gray;
      line-height: 2;
      font-size: 14px;
      width: 85%;
    }
  }
  .account,
  .about {
    h2 {
      font-size: 22px;
    }
    p {
      a {
        color: gray;
      }
    }
  }
}
</style>
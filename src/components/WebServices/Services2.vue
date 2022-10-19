<template>
  <section class="services-2">
    <div class="layout"></div>
    <div class="container">
      <Head
        MainHead="web services"
        class="text-light"
        Descripsion="Rapoo can be used to create anything from a small marketing page to a"
        Remainder="sophisticated website."
      />
      <div class="row gy-5 mt-5">
        <div
          class="col-lg-4 col-md-6 col-sm-12 text-center"
          v-for="service of Services"
          :key="service"
        >
          <div class="service">
            <i :class="service.Icon + ' py-3 mb-3'"></i>
            <h4 class="text-capitalize mb-3">{{ service.HeadCard }}</h4>
            <p class="text-capitalize mt-3">
              Afraid we praise lively he suffer family estate is. Ample order up
              in of in ready. Timed blind had .
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Head from "../HeaderAllSections/Head.vue";
export default {
  name: "Services2",
  components: { Head },
  data() {
    return {
      Services: [
        {
          Icon: "fa-solid fa-lightbulb",
          HeadCard: "creative design",
        },
        {
          Icon: "fa-solid fa-desktop",
          HeadCard: "web development",
        },
        {
          Icon: "fa-solid fa-scroll",
          HeadCard: "digital marketing",
        },
        {
          Icon: "fa-solid fa-layer-group",
          HeadCard: "graphic design",
        },
        {
          Icon: "fa-solid fa-mobile",
          HeadCard: "app develpment",
        },
        {
          Icon: "fa-solid fa-gears",
          HeadCard: "wordpress installation",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
.services-2 {
  background-image: url("@/Imgs/6.jpg");
  object-fit: cover;
  padding: 70px 0px;
  position: relative;
  z-index: 0;
  .layout {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: linear-gradient(
      30deg,
      rgba(121, 110, 255, 0.95) 0%,
      rgba(33, 200, 122, 0.95) 100%
    );
    opacity: 0.9;
    top: 0px;
  }
  p,
  h4 {
    color: #eee;
  }

  i,
  svg {
    font-size: 40px;
    color: #eee;
  }
  .service {
    padding: 50px 25px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.5s ease-in-out;
  }
  .service:hover {
    background-color: white;
    transition: all 0.5s ease-in-out;
    i,
    svg,
    h4,
    p {
      color: black;
    }
  }
}
</style>
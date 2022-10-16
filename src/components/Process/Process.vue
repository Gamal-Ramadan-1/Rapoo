<template>
  <section class="process">
    <div class="container">
      <Head
        MainHead="Our Working Process"
        Descripsion="Rapoo can be used to create anything from a small marketing page to a"
        Remainder=" sophisticated website."
      />
      <div class="row py-5 gy-4 justify-content-lg-start justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-12 text-center">
          <img src="@/Imgs/process-1.jpg" class="img-fluid" />
          <h4 class="text-capitalize mt-4">project research</h4>
          <p>
            Nihil facere delectus eaque aut possimus nobis laudantium
            reprehenderit
          </p>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 text-center">
          <img src="@/Imgs/process-2.jpg" class="img-fluid" />
          <h4 class="text-capitalize mt-4">project demostration</h4>
          <p>
            Nihil facere delectus eaque aut possimus nobis laudantium
            reprehenderit
          </p>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 text-center">
          <img src="@/Imgs/process-3.jpg" class="img-fluid" />
          <h4 class="text-capitalize mt-4">Development & delivery</h4>
          <p>
            Nihil facere delectus eaque aut possimus nobis laudantium
            reprehenderit
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Head from "../HeaderAllSections/Head.vue";
export default {
  name: "Process",
  components: { Head },
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
.process {
  padding: 100px 0px;
  img {
    object-fit: cover;
    border-radius: 10px;
  }
  p {
    color: #6c757d;
  }
}
</style>
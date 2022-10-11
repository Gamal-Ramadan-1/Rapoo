<template>
  <section class="slider">
    <div class="container">
      <div class="row">
        <div
          class="
            col-lg-6 col-md-12 col-sm-12
            d-flex
            align-self-center
            text-slider
          "
        >
          <div>
            <h1 class="text-capitalize my-4">
              industry leading managed services solutions
            </h1>
            <p>
              Rapoo is set of landing and support pages aimed at helping
              companies promote new products and business launches.
            </p>
            <div class="btn px-5 py-4 text-uppercase">purchese now</div>
          </div>
        </div>
        <div class="col-lg-6 text-center img-slider">
          <img src="@/Imgs/banner-img-5.png" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SliderHome",
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
.slider {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 450px;
    height: 450px;
    object-fit: cover;
  }
  h1 {
    font-size: 60px;
    font-weight: 400;
  }
  p {
    color: rgb(118, 117, 117);
    font-size: 18px;
    font-weight: 100;
    margin: 15px 0px 40px 0px;
  }
  .btn {
    background-color: $Green;
    border-radius: 40px;
    color: white;
    font-size: 13px;
    font-weight: 500;
  }
  .btn:hover {
    background-color: $Dark;
  }
}

@media only screen and (max-width: 1024px) {
  .text-slider {
    h1{
      font-size: 34px;
    }
  }
}

@media only screen and (max-width: 768px) {
  .slider{
    height: 70vh;
  }
  .img-slider {
    display: none;
  }
  .text-slider {
    text-align: center;
    h1{
      font-size: 32px;
    }
  }
}
</style>
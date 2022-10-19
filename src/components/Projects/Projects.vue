<template>
  <section class="projects-top">
    <Layout />
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-12">
          <h1 class="text-white">
            We are trying to deliver 100% quality product and success their
            business to achieve ultimate goal.
          </h1>
        </div>
        <div class="col-lg-6 col-sm-12">
          <p>
            We are providing best service since 1990 to present , committed to
            best service delivery.Nullam metus enim, placerat in lacus vel,
            porttitor egestas libero. Etiam ex risus, feugiat eget accumsan eu,
            sagittis eu urna. In eget ultrices metus. Nunc accumsan
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="projects-bottom">
    <div class="container">
      <div class="row gy-4 justify-content-lg-first justify-content-center">
        <div class="col-lg-4 col-md-6 text-center">
          <img src="@/Imgs/p-1.jpg" class="img-fluid" />
          <h5 class="my-4 text-capitalize">project: onepage</h5>
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            excepturi debitis consectetur blanditiis fuga vitae placeat
            quibusdam
          </p>
        </div>
        <div class="col-lg-4 col-md-6 text-center">
          <img src="@/Imgs/p-4.jpg" class="img-fluid" />
          <h5 class="my-4 text-capitalize">project: business</h5>
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            excepturi debitis consectetur blanditiis fuga vitae placeat
            quibusdam
          </p>
        </div>
        <div class="col-lg-4 col-md-6 text-center">
          <img src="@/Imgs/p-3.jpg" class="img-fluid" />
          <h5 class="my-4 text-capitalize">project: marketing</h5>
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            excepturi debitis consectetur blanditiis fuga vitae placeat
            quibusdam
          </p>
        </div>
      </div>
      <div class="row mt-5 pt-3 gy-5">
        <div class="col-lg-7 col-md-12 col-sm-12">
          <div class="single-project">
            <img src="@/Imgs/banner_bg.jpg" class="img-fluid" />
          </div>
        </div>
        <div class="col-lg-5 position-relative col-md-12 col-sm-12">
          <div class="about-us">
            <div class="content">
              <h5>do you know who we are ?</h5>
              <h2 class="my-4">More than just service your products...</h2>
              <p>
                Explain to you how all this mistaken idea of denouncing pleasure
                and praising pain was born and we will give you a complete
                account of the system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Layout from "../Layout/Layout.vue";
export default {
  name: "Projects",
  components: { Layout },
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
.projects-top {
  padding: 80px 0px 180px 0px;
  background-image: url("@/Imgs/banner_bg.jpg");
  margin-bottom: 30px;
  position: relative;
  z-index: 0;
  object-fit: cover;
  p {
    font-size: 18px;
    color: rgb(177, 176, 176);
  }
}
.projects-bottom {
  margin-top: -130px;
  padding-bottom: 130px;
  position: relative;
  z-index: 2;
  img {
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 20px;
  }
  p {
    color: rgb(122, 122, 122);
  }
  .single-project {
    img {
      object-fit: cover;
      height: 450px;
      width: 100%;
    }
  }
  .about-us {
    .content {
      background-color: $Snowy;
      padding: 70px 25px;
      h5 {
        color: $Green;
        font-size: 18px;
        font-weight: bold;
        text-transform: capitalize;
      }
    }
  }
}
@media only screen and (max-width: 4000px) {
  .about-us {
    padding: 16px;
    width: 500px;
    background-color: white;
    position: absolute;
    top: 120px;
    left: -200px;
    box-shadow: 0px 0px 10px 5px #eee;
  }
}
@media only screen and (max-width: 1024px) {
  .about-us {
    top: 100px;
    left: -110px;
  }
}
@media only screen and (max-width: 768px) {
  .about-us {
    width: auto;
    position: static;
    top: 0px;
    left: 0px;
  }
}
@media only screen and (max-width: 426px) {
  .content {
    text-align: center;
  }
}
</style>
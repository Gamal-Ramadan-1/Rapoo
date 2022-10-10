<template>
  <section class="top-bar">
    <div class="container">
      <div class="row py-2">
        <div class="col-md-6 col-sm-12">
          <i class="fa-solid fa-location-pin text-light me-2"></i>
          <p class="d-inline-block m-0">4 Goldfield Rd. Honolulu, HI 96815</p>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="social-media text-md-end text-start">
            <a href="#" class="ms-md-3 ms-0"
              ><i class="fa-brands fa-facebook-f"></i
            ></a>
            <a href="#" class="ms-3"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="ms-3"
              ><i class="fa-brands fa-pinterest-p"></i
            ></a>
            <a href="#" class="ms-3"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "topbar",
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
a,
a:hover {
  color: $Green;
  text-decoration: none;
}
.top-bar {
  background-color: $Dark;
  color: white;
}
</style>
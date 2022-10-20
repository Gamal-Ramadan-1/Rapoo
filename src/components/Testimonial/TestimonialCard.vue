<template>
  <div class="testimonial-card">
    <div class="header-content d-flex align-items-center mb-3">
      <img
        :src="require(`@/Imgs/${ImgCard}`)"
        class="rounded-circle img-fluid"
      />
      <div class="text ms-3">
        <h5 class="my-2">{{ NamePerson }}</h5>
        <p>{{ DescribePerson }}</p>
      </div>
    </div>
    <p>
      Quas ut distinctio tenetur animi nihil rem, amet dolorum totam. Ab
      repudiandae tempore qui fugiat amet ipsa id omnis ipsam, laudantium!
      Dolorem.
    </p>
    <i class="fa-solid fa-quote-right"></i>
  </div>
</template>
<script>
export default {
  name: "TestimonialCard",
  props: {
    ImgCard: String,
    NamePerson: String,
    DescribePerson: String,
  },
};
</script>
<style lang="scss" scoped>
@import url("@/SCSS/Main.scss");
.testimonial-card {
  background-color: white;
  transition: all 0.3s ease-in-out;
  border-radius: 0px 40px 0px 0px;
  padding: 25px;
  position: relative;
  z-index: 0;
  .header-content {
    img {
      padding: 8px;
      width: 115px;
      height: 115px;
      border: 1px solid #eee;
    }
    .text {
      p {
        font-size: 14px;
        font-weight: 500;
        color: black;
      }
    }
  }
  p {
    color: rgb(134, 134, 134);
  }
  i {
    position: absolute;
    bottom: 10px;
    right: 30px;
    z-index: -1;
    font-size: 90px;
    opacity: 0.9;
    color: #eee;
  }
}
.testimonial-card:hover {
  box-shadow: 0px 0px 10px 8px #eee;
  transition: all 0.3s ease-in-out;
}
</style>
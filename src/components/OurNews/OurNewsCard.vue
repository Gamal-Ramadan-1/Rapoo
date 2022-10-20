<template>
  <div class="card text-capitalize">
    <img :src="require(`@/Imgs/${ImgCard}`)" class="card-img-top" />
    <div class="card-body px-0">
      <span class="d-block">{{ DateNew }}</span>
      <h4 class="card-title my-3">{{ Title }}</h4>
      <p class="card-text my-4">{{ CardText }}</p>
      <a href="#" class="btn p-0">Read More</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "OurNewsCard",
  props: {
    ImgCard: String,
    DateNew: String,
    Title: String,
    CardText: String,
  },
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";

.card {
  border: none;
  img {
    object-fit: cover;
  }
  .card-body {
    span {
      font-size: 14px;
      font-weight: 700;
    }
    h4 {
      transition: all 0.3s ease-in-out;
    }
    h4:hover {
      color: $Green;
      transition: all 0.3s ease-in-out;
    }
    p {
      color: #6c757d;
    }
    a {
      color: $Green;
    }
  }
}
</style>
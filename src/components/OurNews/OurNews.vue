<template>
  <section class="our-news">
    <div class="container">
      <Head
        Descripsion="Our duty towards you is to share our experience we're reaching in our work"
        MainHead="Read Our Latest News"
        Remainder="path with you."
      />
      <div
        class="row mt-5 pt-3 justify-content-center justify-content-lg-start gy-4"
      >
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          v-for="OurNewCard of OurNewsCard"
          :key="OurNewCard"
        >
          <OurNewsCard
            :CardText="OurNewCard.CardText"
            :DateNew="OurNewCard.DateNew"
            :ImgCard="OurNewCard.ImgCard"
            :Title="OurNewCard.Title"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Head from "../HeaderAllSections/Head.vue";
import OurNewsCard from "./OurNewsCard.vue";
export default {
  name: "OurNews",
  components: { Head, OurNewsCard },
  data() {
    return {
      OurNewsCard: [
        {
          CardText:
            "There are many variations of passages Lorem Ipsum available, but majority have ama suffered altratio. the lorem.",
          DateNew: "17 October 2022",
          ImgCard: "blog-1.jpg",
          Title: "Top tips to speed up your site in a speedy time",
        },
        {
          CardText:
            "There are many variations of passages Lorem Ipsum available, but majority have ama suffered altratio. the lorem",
          DateNew: "7 October 2018",
          ImgCard: "blog-2.jpg",
          Title: "Brand your site value with marketing strategies",
        },
        {
          CardText:
            "There are many variations of passages Lorem Ipsum available, but majority have ama suffered altratio. the lorem.",
          DateNew: "10 October 2021",
          ImgCard: "blog-3.jpg",
          Title: "Website Optimization is very essential for site speed",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
.our-news {
  padding: 120px 0px;
}
</style>
<template>
  <section class="testimonial">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-5 col-sm-12 d-flex justify-content-center align-items-center">
          <div class="testimonial-text">
            <h2 class="text-capitalize">
              What they say <span class="d-lg-block"> about us </span>
            </h2>
            <p>
              Numquam doloribus impedit at consectetur molestiae tempora ratione
              possimus in veniam aperiam, eum consequuntur, unde. Earum ullam
              molestiae suscipit saepe sunt recusandae.
            </p>
          </div>
        </div>
        <div class="col-lg-7 col-sm-12">
          <div class="row gy-4">
            <div class="col-lg-6 col-md-6 col-sm-12" v-for="CardInfo of CardInfos" :key="CardInfo">
              <TestimonialCard
                :ImgCard="CardInfo.img"
                :NamePerson="CardInfo.name"
                :DescribePerson="CardInfo.DescribePerson"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import TestimonialCard from "./TestimonialCard.vue";
export default {
  name: "Testimonial",
  components: { TestimonialCard },
  data() {
    return {
      CardInfos: [
        {
          img: "test-1.jpg",
          name: "Leanne Graham",
          DescribePerson: "Multi-layered client-server neural-net",
        },
        {
          img: "test-2.jpg",
          name: "Clementine Bauch",
          DescribePerson: "Face to face bifurcated interface",
        },
        {
          img: "test-3.jpg",
          name: "Patricia Lebsack",
          DescribePerson: "User-centric fault-tolerant solution",
        },
        {
          img: "test-1.jpg",
          name: "Chelsey Dietrich",
          DescribePerson: "Synchronised bottom-line interface",
        },
        {
          img: "test-2.jpg",
          name: "Kurtis Weissnat",
          DescribePerson: "Configurable multimedia task-force",
        },
        {
          img: "test-3.jpg",
          name: "Glenna Reichert",
          DescribePerson: "Switchable contextually-based project",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
.testimonial {
  background-color: $Snowy;
  padding: 100px 0px;
}
</style>
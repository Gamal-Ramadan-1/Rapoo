<template>
  <section class="service">
    <div class="container">
      <div class="service-area">
        <div class="row gy-4 py-5">
          <div
            class="col-lg-3 text-center text-capitalize"
            v-for="Service of Services"
            :key="Service"
          >
            <div class="icon-service">
              <i :class="Service.Icon + ' my-5'"></i>
            </div>
            <h6>{{ Service.Head }}</h6>
            <p>{{ Service.Description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Service",
  data() {
    return {
      Services: [
        {
          Icon: "fa-solid fa-thumbs-up",
          Head: "the right advice",
          Description:
            "Our team are experts in matching you with the right provider.",
        },
        {
          Icon: "fa-solid fa-trophy",
          Head: "Recognised for excellence",
          Description:
            "We've been awarded for our high rate of customer satisfaction.",
        },
        {
          Icon: "fa-solid fa-wallet",
          Head: "Compare the best",
          Description:
            "We only compare market leaders with a reputation for service quality.",
        },
        {
          Icon: "fa-solid fa-gauge",
          Head: "Premium Services",
          Description:
            "Lorem ipsum dolor sit amet consectetur adipisicing Similique dolorem.",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
.service {
  height: 100vh;
  background-color: $Snowy;
  .service-area {
    svg {
      font-size: 50px;
      z-index: 1;
      position: relative;
    }
    .icon-service {
      position: relative;
    }
    .icon-service::after {
      content: "";
      position: absolute;
      top: 20px;
      right: 90px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: $Green;
      opacity: 0.3;
      z-index: 0;
    }
    h6 {
      font-size: 18px;
    }
    p {
      color: #6c757d;
    }
  }
}
@media only screen and (max-width: 768px) {
  .service {
    height: auto;
    .icon-service::after {
      left: 47%;
    }
  }
}
</style>
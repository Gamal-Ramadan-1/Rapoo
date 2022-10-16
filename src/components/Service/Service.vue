<template>
  <section class="service">
    <div class="feature">
      <div class="container">
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
    <div class="service-area py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="service-img">
              <img src="@/Imgs/blog-lg.jpg" />
            </div>
          </div>
          <div class="col-lg-9">
            <div class="row h-100">
              <div class="service-wrap col-12 text-lg-start text-center">
                <h2>
                  Get a better deal and start
                  <span class="d-lg-block d-inline"> saving money today </span>
                </h2>
                <p>
                  We compare hundreds of leading products and plans across
                  many<span class="d-lg-block d-inline">
                    categories to bring you the best value for money.</span
                  >
                </p>
              </div>
              <div class="col-12 position-relative">
                <div class="swiper mySwiper my-5">
                  <div class="swiper-wrapper">
                    <div
                      class="swiper-slide"
                      v-for="swiper of swipers"
                      :key="swiper"
                    >
                      <div class="d-flex">
                        <div class="icon mt-1">
                          <i class="fa-solid fa-cloud p-3 me-2"></i>
                        </div>
                        <div class="content">
                          <h4 class="text-uppercase">{{ swiper }}</h4>
                          <p class="m-0">
                            Our team are experts in matching you
                            <span class="d-block">
                              with the right provider.</span
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { onMounted } from "@vue/runtime-core";
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
      swipers: [
        "WEB HOSTING",
        "OFFICE CLOUD",
        "BACKUP SYSTEM",
        "CLOUD HOSTING",
      ],
    };
  },
  setup() {
    onMounted(() => {
      let swiper = new Swiper(".mySwiper", {
        autoplay: true,
        speed: 500,
        loop: true,
        slidesPerGroup: 2,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 2,
          },
        },
      });
    });
  },
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
.service {
  .feature {
    background-color: $Snowy;
    svg,
    i {
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
  .service-area {
    background-color: $Snowy;
    .service-img {
      img {
        width: 100%;
        object-fit: cover;
        height: 500px;
        border: 13px solid #fff;
      }
    }
    .service-wrap {
      h2 {
        margin-top: 50px;
        margin-bottom: 20px;
        margin-left: 15px;
      }
      p {
        margin-left: 15px;
      }
    }
  }
}
.swiper-wrapper {
  .swiper-slide {
    svg,
    i {
      background-color: $Green;
      border-radius: 50%;
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
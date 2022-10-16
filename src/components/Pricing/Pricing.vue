<template>
  <section class="pricing">
    <div class="container">
      <Head
        MainHead="Afford able Price Plan"
        Descripsion="Rapoo can be used to create anything from a small marketing page to a"
        Remainder="sophisticated website."
      />
      <div
        class="row gy-4 mt-5 justify-content-lg-start justify-content-center"
      >
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          v-for="InfoAndPrice of InfosAndPrices"
          :key="InfoAndPrice"
        >
          <div class="card-price">
            <h4 class="py-4 pw-bold text-capitalize">
              {{ InfoAndPrice.type }}
            </h4>
            <div>
              <small>$</small>
              <h1 class="d-inline ms-3 fw-bold">{{ InfoAndPrice.price }}</h1>
              <span class="ms-2">{{ InfoAndPrice.duration }}</span>
            </div>
            <ul>
              <li v-for="item of InfoAndPrice.list" :key="item" class="py-2">
                <i class="fa-solid fa-chevron-right me-2"></i>
                <a href="#">
                  {{ item }}
                </a>
              </li>
            </ul>
            <div class="btn my-4 text-uppercase">purchase now</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Head from "../HeaderAllSections/Head.vue";
export default {
  name: "Pricing",
  components: { Head },
  data() {
    return {
      InfosAndPrices: [
        {
          type: "stnadard",
          price: "13",
          duration: "Annually",
          list: [
            "Unlimited Domain",
            "Unmetered Bandwidth",
            "Free SSL Certificate",
            "20 Email Subscription",
            "SSD Hosting",
          ],
        },
        {
          type: "primuim",
          price: "23",
          duration: "Monthly",
          activeBtn: "active",
          list: [
            "Unlimited Domain",
            "Unmetered Bandwidth",
            "Free SSL Certificate",
            "20 Email Subscription",
            "SSD Hosting",
          ],
        },
        {
          type: "business",
          price: "33",
          duration: "Weekly",
          list: [
            "Unlimited Domain",
            "Unmetered Bandwidth",
            "Free SSL Certificate",
            "20 Email Subscription",
            "SSD Hosting",
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
.pricing {
  padding: 70px 0px;
  .card-price {
    border: 1px solid #eee;
    padding: 20px 0px 20px 50px;
    transition: all 0.3s ease-in-out;

    border-radius: 10px;
    div {
      position: relative;
      small {
        position: absolute;
        top: 0px;
        left: 10px;
        font-size: 20px;
        font-weight: bolder;
        color: $Green;
      }
      h1 {
        font-size: 70px;
      }
      span {
        color: $Green;
        font-weight: bolder;
      }
    }
    ul {
      padding-left: 0px;
      padding-top: 40px;
      li {
        list-style: none;
        i {
          color: $Green;
        }
        a {
          text-decoration: none;
          color: black;
        }
      }
    }
    .btn {
      border-radius: 50px;
      padding: 15px 35px;
      border-style: none;
      font-size: 13px;
      background-color: $Green;
      color: white;
      font-weight: bold;
    }
  }
  .card-price:hover {
    background-color: $Dark;
    h4,
    h1,
    a {
      color: white;
    }
    .btn {
      background-color: #eee;
      color: $Dark;
    }
    transition: all 0.3s ease-in-out;
  }
}
</style>
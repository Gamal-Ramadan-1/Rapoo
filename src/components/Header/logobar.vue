<template>
  <div class="logo">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <a class="navbar-brand text-capitalize" href="#"><h2>rapoo</h2></a>
        </div>
        <div class="col-lg-9">
          <div class="holiday">
            <i class="fa-regular fa-clock mx-4"></i>
            <p class="m-0 d-inline-block">
              Mon-Sat 9:00-12.00
              <span class="text-capitalize d-block">sunday closed</span>
            </p>
          </div>
          <div class="email-us">
            <i class="fa-regular fa-envelope mx-4"></i>
            <p class="m-0 d-inline-block">
              info@example.com
              <span class="text-capitalize d-block">email us</span>
            </p>
          </div>
          <div class="call-free">
            <i class="fa-solid fa-mobile-screen-button me-4"></i>
            <p class="m-0 d-inline-block">
              +7809346657
              <span class="text-capitalize d-block">call free</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container nav-menu py-4">
      <a class="navbar-brand text-capitalize text-light" href="#"
        ><h2>rapoo</h2></a
      >
      <button
        class="navbar-toggler text-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa-solid fa-bars navbar-toggler-icon"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item me-2">
            <div class="links-test relative">
              <router-link class="nav-link" tag="a" to="/"
                >home <i class="fa-solid fa-sort-down mb-1"></i
              ></router-link>
              <div class="home-pages">
                <router-link class="d-block text-dark" tag="a" to="/Home2"
                  >home-2</router-link
                >
                <hr />
                <router-link class="d-block text-dark" tag="a" to="/Home3"
                  >home-3</router-link
                >
                <hr />
                <router-link class="d-block text-dark" tag="a" to="/Home4"
                  >home-4</router-link
                >
              </div>
            </div>
          </li>
          <li class="nav-item me-2">
            <router-link class="nav-link" tag="a" to="/About"
              >about</router-link
            >
          </li>
          <li class="nav-item me-2">
            <router-link class="nav-link" tag="a" to="/Services"
              >services</router-link
            >
          </li>
          <li class="nav-item me-2">
            <router-link class="nav-link" tag="a" to="/Pricing"
              >pricing</router-link
            >
          </li>
          <li class="nav-item me-2">
            <router-link class="nav-link" tag="a" to="/Projects"
              >projects</router-link
            >
          </li>
          <li class="nav-item me-2">
            <router-link class="nav-link" tag="a" to="/Contact"
              >contact</router-link
            >
          </li>
        </ul>
        <div class="btn text-uppercase py-3 px-5 ms-auto">get a quote</div>
      </div>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {
  name: "logobar",
};
</script>
<style lang="scss" scoped>
@import "@/SCSS/Main.scss";
a {
  text-decoration: none;
}
.logo {
  background-color: $Snowy;
  padding-top: 20px;
  padding-bottom: 70px;
  .call-free,
  .email-us,
  .holiday {
    float: right;
    svg {
      color: $Green;
      font-size: 45px;
    }
    p {
      span {
        color: gray;
      }
    }
  }
}
.nav-menu {
  background-color: $Green;
  border-radius: 10px;
  position: relative;
  margin-top: -50px;
  .navbar-nav {
    .nav-item {
      .nav-link {
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 500;
        color: white;
      }
      .nav-link:hover {
        color: rgba(255, 255, 255, 0.75);
      }
    }
  }
}
.navbar-collapse {
  .btn {
    border-radius: 30px;
    background-color: white;
    font-size: 12px;
    font-weight: 500;
  }
  .btn:hover {
    background-color: $Green;
    color: white;
  }
}
.navbar-toggler {
  border: none;
}
.navbar-toggler:focus {
  outline: none;
  box-shadow: none;
}
.home-pages {
  position: absolute;
  display: none;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px 2px rgb(181, 179, 179);
  z-index: 999;
  a {
    font-size: 12px;
    padding: 10px 80px 10px 20px;
    text-transform: uppercase;
  }
  a:hover {
    background-color: $Green;
  }
  hr {
    width: 100%;
    height: 1px;
    background-color: gray;
    margin: 0px;
  }
}
.links-test {
  height: 40px;
}
.links-test:hover {
  .home-pages {
    display: inline-block;
  }
}
@media only screen and (max-width: 4000px) {
  .logo {
    .navbar-brand {
      display: inline-block;
    }
  }
  .nav-menu {
    .navbar-brand {
      display: none;
    }
  }
}
@media only screen and (max-width: 768px) {
  .logo {
    padding-bottom: 20px;
    .navbar-brand {
      display: none;
    }
  }
  .nav-menu {
    .navbar-brand {
      display: inline-block;
    }
    margin-top: 0px;
  }
}
@media only screen and (max-width: 426px) {
  .logo {
    display: none;
  }
  .nav-menu {
    margin: 0px;
    border-radius: 10px;
  }
  .navbar {
    padding: 0px;
  }
}
</style>
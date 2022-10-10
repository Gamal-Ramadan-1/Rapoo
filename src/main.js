import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
createApp(App).use(store).use(router).mount('#app')

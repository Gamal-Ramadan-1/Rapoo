import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Services from "@/views/Services.vue"
import Pricing from "@/views/Pricing.vue"
import Projects from "@/views/Projects.vue"
import Contact from "@/views/Contact.vue"


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Services',
    name: 'Services',
    component: Services
  },
  {
    path: '/Pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

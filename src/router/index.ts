import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home/index.vue'
import MainLayout from '../components/MainLayout/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'mainLayout',
      component: MainLayout
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 65,
      }
    }
  }
})

export default router

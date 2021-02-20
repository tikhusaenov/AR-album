import { createRouter, createWebHistory } from 'vue-router'
import Landing from "../views/Landing";

const routes = [
  {
    path: '/',
    name: 'landing',
    meta: {layout: 'landing'},
    component: Landing
  },
  {
    path: '/landing',
    name: 'landing',
    meta: {layout: 'landing'},
    component: Landing
  },
  {
    path: '/arpage',
    name: 'arpage',
    meta: {layout: 'webarpage'},
    component: () => import('../views/ARPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

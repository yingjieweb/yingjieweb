import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Profile from '@/views/Profile/Profile.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/profile'
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes
})

export default router

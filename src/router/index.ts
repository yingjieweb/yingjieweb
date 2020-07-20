import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes
})

export default router

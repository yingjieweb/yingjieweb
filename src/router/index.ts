import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Profile from '@/views/Profile/Profile.vue'
import Blog from "@/views/Blog.vue";
import Project from "@/views/Project.vue";

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
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/project',
    name: 'project',
    component: Project
  }
]

const router = new VueRouter({
  routes
})

export default router

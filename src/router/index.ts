import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Profile from '@/views/Profile/Profile.vue'
import Blog from "@/views/Blog.vue";
import Project from "@/views/Project.vue";
import WishList from "@/views/WishList/WishList.vue";

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
  },
  {
    path: '/wish-list',
    name: 'wish-list',
    component: WishList
  }
]

const router = new VueRouter({
  routes
})

export default router

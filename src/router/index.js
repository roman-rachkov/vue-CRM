import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main'
    },
    component: Home
  },{
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'empty'
    },
    component: () => import('@/views/Login.vue')
  },{
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'empty'
    },
    component: () => import('@/views/Register.vue')
  },{
    path: '/categories',
    name: 'Categories',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Categories.vue')
  },{
    path: '/profile',
    name: 'Profile',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Profile.vue')
  },{
    path: '/record',
    name: 'Record',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Record.vue')
  },{
    path: '/planning',
    name: 'Planning',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Planning.vue')
  },{
    path: '/history',
    name: 'History',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/History.vue')
  },{
    path: '/detail-record',
    name: 'Detail-record',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Detail-record.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

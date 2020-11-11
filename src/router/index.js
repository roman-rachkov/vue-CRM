import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'empty',
      title: 'Логин'
    },
    component: () => import('@/views/Login.vue')
  },{
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'empty',
      title: 'Регистрация'
    },
    component: () => import('@/views/Register.vue')
  },{
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main',
      title: 'Счет',
      sidebar: true
    },
    component: () => import('@/views/Home')
  },{
    path: '/categories',
    name: 'Categories',
    meta: {
      layout: 'main',
      title: 'Категории',
      sidebar: true
    },
    component: () => import('@/views/Categories.vue')
  },{
    path: '/profile',
    name: 'Profile',
    meta: {
      layout: 'main',
      title: 'Профиль'
    },
    component: () => import('@/views/Profile.vue')
  },{
    path: '/record',
    name: 'Record',
    meta: {
      layout: 'main',
      title: 'Новая запись',
      sidebar: true
    },
    component: () => import('@/views/Record.vue')
  },{
    path: '/planning',
    name: 'Planning',
    meta: {
      layout: 'main',
      title: 'Планирование',
      sidebar: true
    },
    component: () => import('@/views/Planning.vue')
  },{
    path: '/history',
    name: 'History',
    meta: {
      layout: 'main',
      title: 'История',
      sidebar: true
    },
    component: () => import('@/views/History.vue')
  },{
    path: '/detail-record',
    name: 'Detail-record',
    meta: {
      layout: 'main',
      title: 'Детали записи'
    },
    component: () => import('@/views/Detail-record.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

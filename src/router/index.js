import { createRouter, createWebHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/ProductView.vue')
  },
  {
    path: '/category/:id',
    name: 'category',
    component: () => import(/* webpackChunkName: "category" */ '../views/ProductsView.vue')
  },
  {
    path: '/brand/:id',
    name: 'brand',
    component: () => import(/* webpackChunkName: "brand" */ '../views/BrandView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

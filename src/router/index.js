import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const routes = [{
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import( /* webpackChunkName: "about" */ '../views/home/Home.vue')
  },
  {
    path: "/category",
    component: () => import( /* webpackChunkName: "about" */ '../views/category/Category.vue')
  },
  {
    path: "/cart",
    component: () => import( /* webpackChunkName: "about" */ '../views/cart/Cart.vue')
  },
  {
    path: "/profile",
    component: () => import( /* webpackChunkName: "about" */ '../views/profile/Profile.vue')
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

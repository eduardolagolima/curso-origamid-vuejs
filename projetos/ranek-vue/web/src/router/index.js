import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Product from '../views/Product.vue';
import User from '../views/User/User.vue';
import UserProducts from '../views/User/UserProducts.vue';
import UserPurchases from '../views/User/UserPurchases.vue';
import UserSales from '../views/User/UserSales.vue';
import UserEditProfile from '../views/User/UserEditProfile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
    props: true,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/user',
    component: User,
    children: [
      {
        path: 'products',
        name: 'user-products',
        component: UserProducts,
      },
      {
        path: 'purchases',
        name: 'user-purchases',
        component: UserPurchases,
      },
      {
        path: 'sales',
        name: 'user-sales',
        component: UserSales,
      },
      {
        path: 'edit-profile',
        name: 'user-edit-profile',
        component: UserEditProfile,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  },
});

export default router;

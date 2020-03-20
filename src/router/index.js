import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/myhome/home';
import Member from '../pages/member';
import Cart from '../pages/cart';
import Search from '../pages/search';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component:Home
    },
    {
      path: '/member',
      component:Member
    },
    {
      path: '/cart',
      component:Cart
    },
    {
      path: '/search',
      component:Search
    }
  ]
})

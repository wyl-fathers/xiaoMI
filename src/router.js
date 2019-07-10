import Vue from 'vue'
import Router from 'vue-router'
import Best from '@/views/Best.vue'
import Category from '@/views/Category.vue'
import User from '@/views/User.vue'
import Cart from '@/views/Cart.vue'
import About from '@/views/About.vue'


import Mpointsmall from '@/views/User/Mpointsmall.vue'
import Services from '@/views/User/Services.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/Best'
    },
    {
      path: '/About',
      component: About
    },


    {
      path: '/Best',
      component: Best,
      children: [
        {
          path: '',
          component: Best
        }
      ]
    },
    {
      path: '/Category',
      component: Category
    },
    {
      path: '/User',
      component: User
    },
    {
      path: '/Cart',
      component: Cart
    },
    {
      path: '/Mpointsmall',
      component: Mpointsmall
    },
    {
      path: '/Services',
      component: Services
    },



  ]
})

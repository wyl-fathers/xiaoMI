import Vue from 'vue'
import Router from 'vue-router'
import Best from '@/views/Best.vue'
import Category from '@/views/Category.vue'
import User from '@/views/User.vue'
import Cart from '@/views/Cart.vue'
import About from '@/views/About.vue'


import Mpointsmall from '@/views/User/Mpointsmall.vue'
import Services from '@/views/User/Services.vue'

<<<<<<< HEAD
import Phone from '@/views/First/Phone.vue'
import Brain from '@/views/First/Brain.vue'
import HouseEle from '@/views/First/HouseEle.vue'
import Live from '@/views/First/Live.vue'
import TV from '@/views/First/TV.vue'
import NoteBook from '@/views/First/NoteBook.vue'
import Recommend from '@/views/First/Recommend.vue'
import Detail from '@/views/Detail'
=======
>>>>>>> 72c32a7f1410c143c25c81bd390aab275fe6dfbc

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
<<<<<<< HEAD

=======
>>>>>>> 72c32a7f1410c143c25c81bd390aab275fe6dfbc
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
<<<<<<< HEAD
      path: '/detail/:commodity_id',
      component: Detail
    }
=======
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


>>>>>>> 72c32a7f1410c143c25c81bd390aab275fe6dfbc

  ]
})

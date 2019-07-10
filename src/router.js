import Vue from 'vue'
import Router from 'vue-router'
import Best from '@/views/Best.vue'
import Category from '@/views/Category.vue'
import User from '@/views/User.vue'

import Phone from '@/views/First/Phone.vue'
import Brain from '@/views/First/Brain.vue'
import HouseEle from '@/views/First/HouseEle.vue'
import Live from '@/views/First/Live.vue'
import TV from '@/views/First/TV.vue'
import NoteBook from '@/views/First/NoteBook.vue'
import Recommend from '@/views/First/Recommend.vue'
import Detail from '@/views/Detail'

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
      path: '/Best',
      component: Best,
      children: [
        {
          path: '',
          component: Recommend
        },

        {
          path: 'Recommend0',
          component: Recommend
        },
        {
          path: 'Recommend1',
          component: Phone
        },
        {
          path: 'Recommend2',
          component: Brain
        },
        {
          path: 'Recommend3',
          component: TV
        },
        {
          path: 'Recommend4',
          component: NoteBook
        },
        {
          path: 'Recommend5',
          component: HouseEle
        },
        {
          path: 'Recommend6',
          component: Live
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
      path: '/detail/:commodity_id',
      component: Detail
    }

  ]
})

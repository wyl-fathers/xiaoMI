import Vue from 'vue'
import Router from 'vue-router'
import Best from '@/views/Best.vue'
import Category from '@/views/Category.vue'
import User from '@/views/User.vue'
import Cart from '@/views/Cart.vue'
import About from '@/views/About.vue'
import Pay from '@/views/Cart/Pay.vue'
import AboutList from '@/views/About/AboutList.vue'
import Mpointsmall from '@/views/User/Mpointsmall.vue'
import Services from '@/views/User/Services.vue'
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 75e54453331733e74ad3fbf164151324385917bf
=======
>>>>>>> fcf60af4e627ecee4111ad7f8e41ff9932557baa
import OldtoNew from '@/views/Cannel/OldtoNew.vue'
import Xiaomzc from '@/views/Cannel/Xiaomzc.vue'
import Pass from '@/views/User/Pass.vue'
import Login from '@/views/User/Login.vue'
import Maplocation from '@/views/User/Maplocation.vue'
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 75e54453331733e74ad3fbf164151324385917bf
=======
>>>>>>> fcf60af4e627ecee4111ad7f8e41ff9932557baa
import Cannel from '@/views/Cannel/Cannel.vue'
import Detail from '@/views/Detail'
import Shoukuan from '@/views/Cart/Shoukuan.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '*',
    //   redirect: '/Best'
    // },

    {
      path: '/',
      redirect: '/Best'
    },
    {
      path: '/About/list:searchname',
      component: AboutList
    },

    {
      path: '/About',
      component: About,
      children: [
        {
          path: 'list',
          redirect: '/About/list'
        },
        {
          path: '*',
          redirect: '/About'
        }

      ]
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

      path: '/Detail/:commodity_id',
      component: Detail,
      name: 'haha'
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

    {
      path: '/Pay',
<<<<<<< HEAD
      component: Pay
=======
      component: Pay,
      name: 'Pay'
    },

    {
      path: '/Shoukuan',
      component: Shoukuan,
      name: 'Shoukuan'
>>>>>>> fcf60af4e627ecee4111ad7f8e41ff9932557baa
    },
    {
      path: '/Cannel',
      component: Cannel
    },
    {
      path: '/Xiaomzc',
      component: Xiaomzc
    },
    {
      path: '/OldtoNew',
      component: OldtoNew
    },
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 75e54453331733e74ad3fbf164151324385917bf
=======
>>>>>>> fcf60af4e627ecee4111ad7f8e41ff9932557baa
    {
      path: '/Pass',
      component: Pass
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Maplocation',
      component: Maplocation
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import details from '@/page/details'
import shopcart from '@/page/shopcart'
import login from '@/page/login'
import reg from '@/page/reg'
import my from '@/page/my'
import classify from '@/page/classify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/details/:shopid',
      name: 'details',
      component: details
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: shopcart
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    }
  ]
})

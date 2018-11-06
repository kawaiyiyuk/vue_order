import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import goodList from '@/components/goodList'
import pContent from '@/components/pContent'
import hostsList from '@/components/hostsList'
import cart from '@/components/cart'
import orderPay from '@/components/orderPay'
import order from '@/components/order'
import editPeopleInfo from '@/components/editPeopleInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect:'/Home'
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/goodlist',
      name:'goodlist',
      component:goodList
    },
    {
      path:'/pcontent',
      name:'pContent',
      component:pContent
    },
    {
      path:'/hostlist',
      name:'hostsList',
      component:hostsList
    },
    {
      path:'/cart',
      name:'cart',
      component:cart
    },
    {
      path:'/orderpay',
      name:'orderPay',
      component:orderPay
    },
    {
      path:'/order',
      name:'order',
      component:order
    },
    {
      path:'/editpeopleinfo',
      name:'editpeopleinfo',
      component:editPeopleInfo
    },
  ]
})

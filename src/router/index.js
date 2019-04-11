import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login/index'
import Index from '@/views/layout/index'
import HomeIndex from '@/views/home/index'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    {
      path: '/home',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: HomeIndex,
          name: '首页'
        }
      ]
    }
  ]
})

export default router

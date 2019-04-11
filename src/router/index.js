import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login/index'
import Index from '@/views/layout/index'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/main', component: Index }
  ]
})

export default router

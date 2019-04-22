import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login/index'
import Index from '@/views/layout/index'
import HomeIndex from '@/views/home/index'

import ControlIndex from '@/views/control/index'
import ControlNode from '@/views/control/nodelist'
import ControlUser from '@/views/control/userlist'
import ControlPri from '@/views/control/privilege'

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
        },
        {
          path: '/control',
          component: ControlIndex,
          redirect: '/control',
          children: [
            {
              path: '/control/nodes',
              component: ControlNode,
              name: '节点管理'
            },
            {
              path: '/control/users',
              component: ControlUser,
              name: '用户管理'
            },
            {
              path: 'privilege',
              component: ControlPri,
              name: '权限管理'
            }
          ]
        }
      ]
    }
  ]
})

export default router

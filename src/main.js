import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import APP from './APP'

import ElementUi from 'element-ui'
import Echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import './scss/style.scss'
import './scss/index.scss'
import './scss/ele.scss'

Vue.use(ElementUi)
Vue.use(Echarts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { APP },
  template: '<APP />'
})

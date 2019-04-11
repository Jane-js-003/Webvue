import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import APP from './APP'

import ElementUi from 'element-ui'

import './scss/style.scss'
import './scss/index.scss'

Vue.use(ElementUi)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { APP },
  template: '<APP />'
})

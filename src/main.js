import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Plugin } from 'vue-fragment'
import VuejsDialog from 'vuejs-dialog'

import 'vuejs-dialog/dist/vuejs-dialog.min.css'

Vue.config.productionTip = false

Vue.use(Plugin)
Vue.use(VuejsDialog)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

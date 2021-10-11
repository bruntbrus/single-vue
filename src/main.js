import Vue from 'vue'

import router from './router'
import store from './store'

import App from './App.vue'

Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  render: h => h(App)
})

vm.$mount('#app')

export default vm

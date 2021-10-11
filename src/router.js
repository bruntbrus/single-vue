import Vue from 'vue'
import VueRouter from 'vue-router'

import Start from './components/Start.vue'
import Edit from './components/Edit.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Start },
  { path: '/edit', component: Edit }
]

export default new VueRouter({ routes })

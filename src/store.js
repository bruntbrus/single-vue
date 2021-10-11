import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const modules = {
  edit: {
    namespaced: true,
    state: {
      text: ''
    },
    mutations: {
      setText (state, value) {
        state.text = value
      }
    }
  }
}

export default new Vuex.Store({
  plugins: [
    persistedState({ key: 'state' })
  ],
  modules
})

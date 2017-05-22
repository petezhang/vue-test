// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    lists: ['test1', 'test2', 'test3', 'test4']
  },
  mutations: {
    increment (state) {
      state.count = 'hello word'
    },
    addList (state, { str }) {
      state.lists.push(str)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

store.commit('increment')
console.log(store.state.count)

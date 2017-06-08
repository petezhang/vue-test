// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {createStore} from './store'

Vue.config.productionTip = false

const store = createStore()

// new Vuex.Store({
//   state: {
//     lists: ['test1', 'test2', 'test3', 'test4']
//   },
//   mutations: {
//     increment (state) {
//       state.count = 'hello word'
//     },
//     addList (state, { str }) {
//       state.lists.push(str)
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mounted () {
    this.$store.dispatch('GET_LIST_DATA')
  },
  template: '<App/>',
  components: { App }
})

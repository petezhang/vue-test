// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {createStore} from './store'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false

const store = createStore()

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  mounted () {
    this.$http.get('/api/jobs/positionAjax.json?px=default&city=%E8%8B%8F%E5%B7%9E&needAddtionalResult=false').then(function (res) {
      console.log(res)
      vm.$store.dispatch('GET_LIST_DATA',res.data.content.positionResult.result)
    })
  },
  template: '<App/>',
  components: { App }
})

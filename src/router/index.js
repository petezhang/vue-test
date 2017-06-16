import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/top'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Top',
    component: Top
  }, {
    path: '/top',
    name: 'Top',
    component: Top
  }]
})

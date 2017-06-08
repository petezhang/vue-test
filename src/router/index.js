import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/top'
import New from '@/components/new'
import Show from '@/components/show'
import Ask from '@/components/ask'
import Jobs from '@/components/jobs'

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
  }, {
    path: '/new',
    name: 'New',
    component: New
  }, {
    path: '/show',
    name: 'Show',
    component: Show
  }, {
    path: '/ask',
    name: 'Ask',
    component: Ask
  }, {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  }]
})

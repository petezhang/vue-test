import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      activeType: null,
      itemsPerPage: 20,
      items: { /* [id: number]: Item */ },
      users: { /* [id: string]: User */ },
      lists: {
        top: [ /* number */ ],
        new: [],
        show: [],
        ask: [],
        job: []
      }
    },
    actions,
    mutations,
    getters
  })
}

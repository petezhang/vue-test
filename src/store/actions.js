import {
  getData
} from '../service/getdata'

export default {
  GET_LIST_DATA: ({
    commit
  }) => {
    const ids = getData()
    const type = 'top'
    commit('SET_LIST', {
      type,
      ids
    })
  }
}

export default {
  GET_LIST_DATA: ({ commit }, lists) => {
    const ids = lists
    const type = 'top'
    commit('SET_LIST', {
      type,
      ids
    })
  }
}

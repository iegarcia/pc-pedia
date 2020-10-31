import state from './InitialState'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
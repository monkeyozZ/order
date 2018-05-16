const state = {
  isLoading: false
}
const getters = {
  isLoading: state => state.isLoading
}
const mutations = {
  updateLoadingStatus (state, payload) {
    state.isLoading = payload.isLoading
  }
}

export default { state, mutations, getters }

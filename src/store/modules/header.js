import * as types from '../mutation'
const state = {
  header_text: ''
}

const getters = {
  header_text: state => state.header_text
}

const mutations = {
  [types.HEADER_TEXT] (state, text) {
    state.header_text = text
  }
}

export default {
  state, mutations, getters
}

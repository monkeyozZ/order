import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action'
import Header from './modules/Header'
import loading from './modules/loading'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    Header,
    loading
  }
})

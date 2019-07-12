import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    NavIsShow: true,

  },
  mutations: {

    NavShow(state, data) {

      state.NavIsShow = data
    },
    NavHide(state, data) {

      state.NavIsShow = data
    }
  },
  actions: {

  }
})

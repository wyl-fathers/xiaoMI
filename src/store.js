import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    NavIsShow: true,
    hide: true,
    goodslist: []


  },
  mutations: {
    localShop(state, data) {
      state.goodslist = data
    },


    addshop(state, data) {
      for (var i in Array.from(state.goodslist)) {
        if (Array.from(state.goodslist)[i].id == data.id) {
          state.goodslist[i].number++
          return
        }
      }



      state.goodslist.push(data)
    },

    // delshop(state,data){
    //   if(state.goodslist){
    //     return
    //   }
    //   var a =   Array.from(state.goodslist).indexOf(data)
    //   state.goodslist.splice(a,1)
    // },
    delshop(state, data) {
      state.goodslist.splice(data, 1)
    },


    changdu(state, data) {
      state.hide = data
    },

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

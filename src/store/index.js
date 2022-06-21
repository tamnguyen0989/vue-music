import { createStore } from 'vuex'

export default createStore({
  state: {
    authModalShow: false
  },
  getters: {
    // authModalShow: (state) => state.authModalShow,
  },
  mutations: {
    toogleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow
    }
  },
  actions: {
  },
  modules: {
  }
})

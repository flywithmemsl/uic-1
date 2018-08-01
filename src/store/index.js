import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    character: '/static/img/character-girl-4.0b3adca.png'
  },

  mutations: {
    setCharacter(state, char) {
      state.character = char
    }
  }
})

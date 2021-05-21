import Vue from 'vue'
import Vuex from 'vuex'

import { api } from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: []
  },
  getters: {
    coins: state => state.coins
  },
  mutations: {
    SET_COINS: (state, payload) => state.coins = payload
  },
  actions: {
    async requestCoins ({ commit }) {
      const response = await api.get('/all')
        .then(response => response.data)

      commit('SET_COINS', response)
    }
  }
})

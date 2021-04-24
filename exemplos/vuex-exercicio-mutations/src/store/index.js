import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listaAulas: [
      {
        nome: "HTML e CSS",
        duracao: 15
      },
      {
        nome: "JavaScript",
        duracao: 30
      },
      {
        nome: "UX Design",
        duracao: 20
      }
    ],
    listaAulasCompletas: []
  },
  mutations: {
    COMPLETAR_AULA(state, payload) {
      state.listaAulasCompletas.push(payload);
    }
  }
})

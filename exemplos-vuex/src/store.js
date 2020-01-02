import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuario: "Eduardo",
    quantidadeAulasCompletas: 15
  },
  mutations: {
    MUDAR_USUARIO(state, payload) {
      state.usuario = payload.novoUsuario;
    },
    COMPLETAR_AULA(state) {
      state.quantidadeAulasCompletas++;
    }
  }
});
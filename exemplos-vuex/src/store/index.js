import Vue from "vue";
import Vuex from "vuex";
import cep from "./cep.js"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cep
  },
  state: {
    usuario: "Eduardo",
    quantidadeAulasCompletas: 15,
    livros: [
      {
        nome: "O Senhor dos Anéis",
        lido: true,
      },
      {
        nome: "Harry Potter",
        lido: true,
      },
      {
        nome: "As Crônicas de Gelo e Fogo",
        lido: false,
      }
    ]
  },
  mutations: {
    MUDAR_USUARIO(state, payload) {
      state.usuario = payload.novoUsuario;
    },
    COMPLETAR_AULA(state) {
      state.quantidadeAulasCompletas++;
    },
  },
  actions: {
    completarAula(context) {
      context.commit("COMPLETAR_AULA")
    },
  },
  getters: {
    livrosLidos: state => lido => state.livros.filter(livro => livro.lido === lido)
    // livrosLidos(state) {
    //   return function(lido) {
    //     return state.livros.filter(livro => livro.lido === lido);
    //   }
    // }
  }
});
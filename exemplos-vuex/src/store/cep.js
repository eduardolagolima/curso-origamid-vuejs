export default {
  namespaced: true,
  state: {
    cep: null,
  },
  mutations: {
    SETAR_CEP(state, payload) {
      state.cep = payload
    }
  },
  actions: {
    fetchCep(context) {
      fetch(`https://viacep.com.br/ws/99150000/json`)
        .then(r => r.json())
        .then(r => {
          setTimeout(() => {
            context.commit("SETAR_CEP", r);
          }, 1000)
        });
    }
  }
}
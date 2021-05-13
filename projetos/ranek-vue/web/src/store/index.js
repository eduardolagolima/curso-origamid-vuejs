import Vue from 'vue';
import Vuex from 'vuex';

import api from '../services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: {
      id: null,
      name: '',
      email: '',
      password: '',
      cep: '',
      state: '',
      city: '',
      neighborhood: '',
      street: '',
      number: null,
    },
  },
  mutations: {
    UPDATE_LOGGED_IN(state, payload) {
      state.loggedIn = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
  },
  actions: {
    async getUser(context, payload) {
      try {
        const response = await api.get(`/users/${payload}`);

        context.commit('UPDATE_LOGGED_IN', true);
        context.commit('UPDATE_USER', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async createUser(context, payload) {
      try {
        context.commit('UPDATE_USER', { id: payload.email });
        await api.post('/users', payload);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

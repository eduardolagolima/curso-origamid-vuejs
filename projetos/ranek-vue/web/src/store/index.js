import Vue from 'vue';
import Vuex from 'vuex';

import api from '../services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: {
      id: null,
      email: '',
      name: '',
      password: '',
      zip_code: null,
      state: '',
      city: '',
      street: '',
      number: null,
    },
  },
  mutations: {
    UPDATE_LOGGED_IN(state, payload) {
      state.loggedIn = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = payload;
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
  },
});

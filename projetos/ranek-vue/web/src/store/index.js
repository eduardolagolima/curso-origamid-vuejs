import Vue from 'vue';
import Vuex from 'vuex';

import api from '../services/api';

Vue.use(Vuex);

const getInitialState = () => ({
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
});

export default new Vuex.Store({
  state: getInitialState(),
  mutations: {
    UPDATE_LOGGED_IN(state, payload) {
      state.loggedIn = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
  },
  actions: {
    async login(context, payload) {
      try {
        const response = await api.get(`/users/${payload}`);

        context.commit('UPDATE_LOGGED_IN', true);
        context.commit('UPDATE_USER', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async register(context, payload) {
      try {
        context.commit('UPDATE_USER', { id: payload.email });
        await api.post('/users', payload);
      } catch (error) {
        console.log(error);
      }
    },
    logout(context) {
      context.commit('UPDATE_USER', getInitialState().user);
      context.commit('UPDATE_LOGGED_IN', getInitialState().loggedIn);
    },
  },
});

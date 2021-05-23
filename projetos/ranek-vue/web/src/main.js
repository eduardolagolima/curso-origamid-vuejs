import Vue from 'vue';

import App from './App.vue';
import Loading from './components/Loading.vue';

import formatValue from './filters';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('Loading', Loading);
Vue.filter('formatValue', formatValue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

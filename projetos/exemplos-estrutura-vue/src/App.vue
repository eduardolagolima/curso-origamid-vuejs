<template>
  <div id="app">
    <p>Qual aula?</p>
    <button @click="componenteAtivo = 'Slots'">slots</button>
    <button @click="componenteAtivo = 'Dynamic'">dynamic</button>
    <button @click="componenteAtivo = 'Async'">async</button>
    <hr>
    <component :is="componenteAtivo"></component>
  </div>
</template>

<script>
import Slots from './components/slots/Slots.vue';
import Dynamic from './components/dynamic/Dynamic.vue';
import Async from './components/async/Async.vue';

export default {
  name: 'app',
  data() {
    return {
      componenteAtivo: ''
    }
  },
  components: {
    Slots,
    Dynamic,
    Async
  }
};
</script>

<style>
</style>

<template>
  <div id="app">
    <p>Qual aula?</p>
    <button @click="componenteAtivo = 'Slots'">slots</button>
    <button @click="componenteAtivo = 'Dynamic'">dynamic</button>
    <button @click="componenteAtivo = 'Async'">async</button>
    <button @click="componenteAtivo = 'Transition'">transition</button>
    <button @click="componenteAtivo = 'Components'">components</button>
    <button @click="componenteAtivo = 'List'">list</button>
    <hr>
    <component :is="componenteAtivo"></component>
  </div>
</template>

<script>
import Slots from './components/slots/Slots.vue';
import Dynamic from './components/dynamic/Dynamic.vue';
import Async from './components/async/Async.vue';
import Transition from './components/transition/Transition.vue';
import Components from './components/components/Components.vue';
import List from './components/list/List.vue';

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
    Async,
    Transition,
    Components,
    List
  }
};
</script>

<style>
</style>

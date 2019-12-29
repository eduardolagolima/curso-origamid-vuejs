<template>
  <div>
    <button @click="estoque++">Adicionar estoque</button>
    <button @click="estoque = 0">Zerar estoque</button>
    <transition mode="out-in">
      <p v-if="estoque > 0" key="comEstoque">Estoque: {{estoque}}</p>
      <p v-else key="semEstoque">Sem estoque</p>
    </transition>

    <hr>

    <button @click="componenteAtivo = 'Componente1'">Componente1</button>
    <button @click="componenteAtivo = 'Componente2'">Componente2</button>

    <transition mode="out-in">
      <component :is="componenteAtivo"></component>
    </transition>

  </div>
</template>

<script>
import Componente1 from './Componente1';
import Componente2 from './Componente2';

export default {
  name: 'Components',
  data() {
    return {
      estoque: 0,
      componenteAtivo: 'Componente1'
    }
  },
  components: {
    Componente1,
    Componente2
  }
}
</script>

<style>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s;
  }

  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
</style>
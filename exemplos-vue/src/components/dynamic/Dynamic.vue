<template>
  <div>
    <p>Aula ou exercício?</p>
    <button @click="componenteAtivo = 'Aula'">Aula</button>
    <button @click="componenteAtivo = 'Exercicio'">Exercicio</button>
    <hr>
    <component :is="componenteAtivo"></component>
  </div>
</template>

<script>
import Aula from "./aula/Aula.vue";
import Exercicio from "./exercicio/Exercicio.vue";

export default {
  name: 'Dynamic',
  data() {
    return {
      componenteAtivo: ''
    }
  },
  components: {
    Aula,
    Exercicio
  }
};
</script>

<style>
</style>
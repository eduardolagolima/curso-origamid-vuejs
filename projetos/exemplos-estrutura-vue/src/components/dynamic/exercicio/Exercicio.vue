<template>
  <div>
    <p>Exercicio</p>
    <button @click="componenteAtivo = 'Sobre'">Sobre</button>
    <button @click="componenteAtivo = 'Servicos'">Servicos</button>
    <button @click="componenteAtivo = 'Contato'">Contato</button>
    <hr>
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>
import Sobre from './Sobre';
import Servicos from './Servicos';
import Contato from './Contato';

export default {
  name: 'Exercicio',
  data() {
    return {
      componenteAtivo: ''
    }
  },
  components: {
    Sobre,
    Servicos,
    Contato
  }
}
</script>

<style>

</style>
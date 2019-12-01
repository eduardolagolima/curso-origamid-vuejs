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
import Sobre from './exercicio/Sobre';
import Servicos from './exercicio/Servicos';
import Contato from './exercicio/Contato';

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
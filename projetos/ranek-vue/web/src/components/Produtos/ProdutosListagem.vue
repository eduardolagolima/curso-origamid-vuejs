<template>
  <section class="produtos-container">
    <div
      v-for="({fotos, preco, nome, descricao}, index) in produtos"
      :key="index"
    >
      <img
        v-if="fotos.length"
        :src="fotos[0].src"
        :alt="fotos[0].titulo"
      >
      <p class="preco">
        {{ preco }}
      </p>
      <h2 class="titulo">
        {{ nome }}
      </h2>
      <p>{{ descricao }}</p>
    </div>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  name: 'ProdutosListagem',
  data() {
    return {
      produtos: [],
    };
  },
  created() {
    this.getProdutos();
  },
  methods: {
    async getProdutos() {
      try {
        this.produtos = await api.get('/produto');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>

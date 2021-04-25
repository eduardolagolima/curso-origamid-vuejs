<template>
  <form>
    <input
      id="busca"
      v-model="busca"
      name="busca"
      type="text"
    >
    <input
      id="lupa"
      type="submit"
      value="Buscar"
      @click.prevent="buscarProdutos"
    >
  </form>
</template>

<script>
export default {
  name: 'ProdutosBusca',
  data() {
    return {
      busca: '',
    };
  },
  methods: {
    buscarProdutos() {
      if (this.busca !== this.$route.query.q) {
        this.$router.push({ query: { q: this.busca } });
      }
    },
  },
};
</script>

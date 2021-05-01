<template>
  <form>
    <input
      id="busca"
      v-model="busca"
      name="busca"
      type="text"
      placeholder="Buscar..."
    >
    <input
      id="lupa"
      type="submit"
      value=""
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

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

#busca {
  width: 100%;
  padding: 20px;
  border: none;
}

#busca:focus,
#busca:hover {
  transform: scale(1.1);
}

#lupa {
  width: 62px;
  height: 62px;
  background: url("../../assets/search.svg") no-repeat center center;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: none;
}
</style>

<template>
  <section>
    <h1>👍 Compre ou Venda 👎</h1>
    <ProdutosBusca />
    <ProdutosListagem />
  </section>
</template>

<script>
import ProdutosBusca from '../components/Produtos/ProdutosBusca.vue';
import ProdutosListagem from '../components/Produtos/ProdutosListagem.vue';

export default {
  name: 'Home',
  components: {
    ProdutosBusca,
    ProdutosListagem,
  },
};
</script>

<style scoped>
h1 {
  color: #87f;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
</style>

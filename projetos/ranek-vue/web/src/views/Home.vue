<template>
  <section>
    <h1>👍 Compre ou Venda 👎</h1>
    <ProductsSearch />
    <ProductsListing />
  </section>
</template>

<script>
import ProductsSearch from '../components/Products/ProductsSearch.vue';
import ProductsListing from '../components/Products/ProductsListing.vue';

export default {
  name: 'Home',
  components: {
    ProductsSearch,
    ProductsListing,
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

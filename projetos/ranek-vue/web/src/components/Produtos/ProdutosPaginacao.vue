<template>
  <ul v-if="paginasTotal > 1">
    <li
      v-for="pagina in paginasTotal"
      :key="pagina"
    >
      <router-link :to="{ query: { ...$route.query, _page: pagina } }">
        {{ pagina }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProdutosPaginacao',
  props: {
    produtosPorPagina: {
      type: Number,
      default: 1,
    },
    produtosTotal: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    paginasTotal() {
      if (this.produtosPorPagina === 0) {
        return 0;
      }

      return Math.ceil(this.produtosTotal / this.produtosPorPagina);
    },
  },
};
</script>

<style>
ul {
  grid-column: 1 / -1;
}

li {
  display: inline-block;
}

li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}

li a.router-link-exact-active,
li a:hover {
  background: #87f;
  color: #fff;
}
</style>

<template>
  <ul v-if="totalPaginas > 1">
    <li
      v-for="({ label, pagina }, index) in paginas"
      :key="index"
    >
      <router-link
        :class="{
          'pagina-ativa': pagina === paginaAtual && !['<<', '<', '>', '>>'].includes(label)
        }"
        :to="query(pagina)"
      >
        {{ label }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { createArrayRangeByNumber } from '../../helpers';

export default {
  name: 'ProdutosPaginacao',
  props: {
    produtosPorPagina: {
      type: Number,
      default: 1,
    },
    totalProdutos: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      paginasRange: 9,
    };
  },
  computed: {
    paginaAtual() {
      const { _page: paginaAtual = 1 } = this.$route.query;
      return +paginaAtual;
    },
    paginas() {
      const { paginasRange, paginaAtual, totalPaginas } = this;

      const paginas = createArrayRangeByNumber(paginasRange, paginaAtual, 0, totalPaginas)
        .map((pagina) => ({ label: pagina, pagina }));

      return [
        { label: '<<', pagina: 1 },
        { label: '<', pagina: Math.max(1, paginaAtual - 1) },
        ...paginas,
        { label: '>', pagina: Math.min(totalPaginas, paginaAtual + 1) },
        { label: '>>', pagina: totalPaginas },
      ];
    },
    totalPaginas() {
      if (this.produtosPorPagina === 0) {
        return 0;
      }

      return Math.ceil(this.totalProdutos / this.produtosPorPagina);
    },
  },
  methods: {
    query(pagina) {
      return {
        query: {
          ...this.$route.query,
          _page: pagina,
        },
      };
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
  display: block;
  text-align: center;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 2px;
  margin: 4px;
}

li a:hover {
  background: #87f;
  color: #fff;
}

.pagina-ativa {
  background: #87f;
  color: #fff;
}
</style>

<template>
  <section class="produtos-container">
    <div
      v-if="produtos && produtos.length > 0"
      class="produtos"
    >
      <div
        v-for="({fotos, preco, nome, descricao}, index) in produtos"
        :key="index"
        class="produto"
      >
        <router-link to="/">
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
        </router-link>
      </div>
    </div>
    <div v-else-if="produtos && produtos.length === 0">
      <p class="sem-resultados">
        Nenhum resultado encontrado para "{{ this.$route.query.q }}"
      </p>
    </div>
  </section>
</template>

<script>
import api from '../../services/api';
import serialize from '../../helpers/serialize';

export default {
  name: 'ProdutosListagem',
  data() {
    return {
      produtos: [],
      produtosPorPagina: 9,
    };
  },
  computed: {
    query() {
      const query = { _limit: this.produtosPorPagina, ...this.$route.query };
      return serialize(query);
    },
  },
  watch: {
    query() {
      this.getProdutos();
    },
  },
  created() {
    this.getProdutos();
  },
  methods: {
    async getProdutos() {
      try {
        this.produtos = await api.get(`/produto?${this.query}`);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
}

.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.produto:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  color: #e80;
  font-weight: bold;
}

.sem-resultados {
  text-align: center;
}
</style>

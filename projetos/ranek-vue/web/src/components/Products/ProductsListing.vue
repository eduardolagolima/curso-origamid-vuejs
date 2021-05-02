<template>
  <section class="products-container">
    <div
      v-if="products && products.length > 0"
      class="products"
    >
      <div
        v-for="({ images, price, name, description }, index) in products"
        :key="index"
        class="product"
      >
        <router-link to="/">
          <img
            v-if="images.length"
            :src="images[0].src"
            :alt="images[0].title"
          >
          <p class="price">
            {{ price }}
          </p>
          <h2 class="title">
            {{ name }}
          </h2>
          <p>{{ description }}</p>
        </router-link>
      </div>
      <ProductsPagination
        :products-per-page="productsPerPage"
        :total-products="totalProducts"
      />
    </div>
    <div v-else-if="products && products.length === 0">
      <p class="no-results">
        Nenhum resultado encontrado para "{{ this.$route.query.q }}"
      </p>
    </div>
  </section>
</template>

<script>
import api from '../../services/api';
import { serializeObject } from '../../helpers';

import ProductsPagination from './ProductsPagination.vue';

export default {
  name: 'ProductsListing',
  components: {
    ProductsPagination,
  },
  data() {
    return {
      products: [],
      productsPerPage: 3,
      totalProducts: 0,
    };
  },
  computed: {
    query() {
      return serializeObject({
        _limit: this.productsPerPage,
        ...this.$route.query,
      });
    },
  },
  watch: {
    query() {
      this.getProducts();
    },
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const response = await api.get(`/products?${this.query}`);
        this.products = response.data;
        this.totalProducts = +response.headers['x-total-count'];
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.products-container {
  max-width: 1000px;
  margin: 0 auto;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.product {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.product:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.product img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.title {
  margin-bottom: 10px;
}

.price {
  color: #e80;
  font-weight: bold;
}

.no-results {
  text-align: center;
}
</style>

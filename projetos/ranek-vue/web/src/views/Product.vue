<template>
  <section>
    <div
      v-if="product"
      class="product"
    >
      <ul
        v-if="product.images.length"
        class="images"
      >
        <li
          v-for="({src, title}, index) in product.images"
          :key="index"
        >
          <img
            :src="src"
            :alt="title"
          >
        </li>
      </ul>
      <div class="info">
        <h1>{{ product.name }}</h1>
        <p class="price">
          {{ product.price | formatValue }}
        </p>
        <p class="description">
          {{ product.description }}
        </p>

        <button
          v-if="product.sold"
          class="btn"
          disabled
        >
          Produto Vendido
        </button>
        <transition
          v-else
          mode="out-in"
        >
          <Checkout
            v-if="checkout"
            :product="product"
          />
          <button
            v-else
            class="btn"
            @click="checkout = true"
          >
            Comprar
          </button>
        </transition>
      </div>
    </div>
    <Loading v-else />
  </section>
</template>
<script>
import Checkout from '../components/Checkout.vue';

import api from '../services/api';

export default {
  name: 'Product',
  components: {
    Checkout,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      product: null,
      checkout: false,
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      try {
        const response = await api.get(`/products/${this.id}`);
        this.product = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.price {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.description {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>

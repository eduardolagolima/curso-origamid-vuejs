<template>
  <section>
    <div v-if="userSales.length > 0">
      <h2>Vendas</h2>
      <div
        v-for="({ product, purchaser_id: purchaserId, address }, index) in userSales"
        :key="index"
        class="products-wrapper"
      >
        <ProductsItem
          v-if="product"
          :product="product"
        >
          <p class="purchaser">
            <span>Comprador:</span>
            {{ purchaserId }}
          </p>
        </ProductsItem>
        <div class="delivery">
          <h3>Entrega</h3>
          <ul v-if="address">
            <li>CEP: {{ address.cep }}</li>
            <li>Estado: {{ address.state }}</li>
            <li>Cidade: {{ address.city }}</li>
            <li>Bairro: {{ address.neighborhood }}</li>
            <li>Rua: {{ address.street }}</li>
            <li>Número: {{ address.number }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

import ProductsItem from '../../components/Products/ProductsItem.vue';

import api from '../../services/api';

export default {
  name: 'UserSales',
  components: {
    ProductsItem,
  },
  data() {
    return {
      userSales: [],
    };
  },
  computed: {
    ...mapState(['loggedIn', 'user']),
  },
  watch: {
    loggedIn() {
      this.getUserSales();
    },
  },
  created() {
    if (this.loggedIn) {
      this.getUserSales();
    }
  },
  methods: {
    async getUserSales() {
      try {
        const response = await api.get(`transactions?seller_id=${this.user.id}`);
        this.userSales = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}

h3 {
  margin: 0px;
  justify-self: end;
}

.products-wrapper {
  margin-bottom: 40px;
}

.purchaser span {
  color: #e80;
}

.delivery {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 60px;
}
</style>

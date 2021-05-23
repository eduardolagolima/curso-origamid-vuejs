<template>
  <section>
    <div v-if="userPurchases.length > 0">
      <h2>Compras</h2>
      <div
        v-for="({ product, seller_id: sellerId }, index) in userPurchases"
        :key="index"
        class="products-wrapper"
      >
        <ProductsItem
          v-if="product"
          :product="product"
        >
          <p class="seller">
            <span>Vendedor:</span>
            {{ sellerId }}
          </p>
        </ProductsItem>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

import ProductsItem from '../../components/Products/ProductsItem.vue';

import api from '../../services/api';

export default {
  name: 'UserPurchases',
  components: {
    ProductsItem,
  },
  data() {
    return {
      userPurchases: [],
    };
  },
  computed: {
    ...mapState(['loggedIn', 'user']),
  },
  watch: {
    loggedIn() {
      this.getUserPurchases();
    },
  },
  created() {
    if (this.loggedIn) {
      this.getUserPurchases();
    }
  },
  methods: {
    async getUserPurchases() {
      try {
        const response = await api.get(`transactions?purchaser_id=${this.user.id}`);
        this.userPurchases = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.products-wrapper {
  margin-bottom: 40px;
}

.seller span {
  color: #e80;
}

h2 {
  margin-bottom: 20px;
}
</style>

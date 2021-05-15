<template>
  <section>
    <h2>Adicionar produto</h2>
    <ProductsForm />
    <h2>Seus produtos</h2>
    <transition-group
      v-if="userProducts"
      name="list"
      tag="ul"
    >
      <li
        v-for="(product, index) in userProducts"
        :key="index"
      >
        <ProductsItem :product="product">
          <p>{{ product.description }}</p>
          <button
            class="delete-product"
            @click="deleteProduct(product.id)"
          />
        </ProductsItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import ProductsForm from '../../components/Products/ProductsForm.vue';
import ProductsItem from '../../components/Products/ProductsItem.vue';

import api from '../../services/api';

export default {
  name: 'UserProducts',
  components: {
    ProductsForm,
    ProductsItem,
  },
  computed: {
    ...mapState([
      'loggedIn',
      'user',
      'userProducts',
    ]),
  },
  watch: {
    async loggedIn() {
      await this.getUserProducts();
    },
  },
  async created() {
    if (this.loggedIn) {
      await this.getUserProducts();
    }
  },
  methods: {
    ...mapActions(['getUserProducts']),
    async deleteProduct(id) {
      try {
        const confirm = window.confirm('Deseja remover este produto?');
        if (confirm) {
          await api.delete(`/products/${id}`);
          await this.getUserProducts();
        }
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

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

.delete-product {
  position: absolute;
  top: 0px;
  right: 0px;
  background: url("../../assets/remove.svg") no-repeat center center;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
  border: none;
}
</style>

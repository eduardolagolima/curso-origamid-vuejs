<template>
  <form class="products-form">
    <label for="name">Nome</label>
    <input
      id="name"
      v-model="product.name"
      name="name"
      type="text"
    >
    <label for="price">Preço</label>
    <input
      id="price"
      v-model="product.price"
      name="price"
      type="number"
    >
    <label for="images">Imagens</label>
    <input
      id="images"
      ref="images"
      name="images"
      type="file"
    >
    <label for="description">Descrição</label>
    <textarea
      id="description"
      v-model="product.description"
      name="description"
    />
    <input
      class="btn"
      type="button"
      value="Adicionar"
      @click.prevent="addProduct"
    >
  </form>
</template>

<script>
import api from '../../services/api';

export default {
  name: 'ProductsForm',
  data() {
    return {
      product: {
        name: '',
        price: '',
        description: '',
        images: [],
      },
    };
  },
  methods: {
    async addProduct() {
      const data = {
        users_id: this.$store.state.user.id,
        ...this.product,
      };

      await api.post('/products', data);
      await this.$store.dispatch('getUserProducts');
    },
  },
};
</script>

<style scoped>
.products-form {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>

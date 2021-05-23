<template>
  <div
    v-if="product"
    class="product"
  >
    <router-link
      class="product-image"
      :to="{
        name: 'product',
        params: {
          id: product.id.toString()
        }
      }"
    >
      <img
        v-if="product.images.length > 0"
        :src="product.images[0].src"
        :alt="product.images[0].title"
      >
      <p>Ver Produto</p>
    </router-link>
    <div class="product-info">
      <p class="product-price">
        {{ product.price | formatValue }}
      </p>
      <h2 class="product-name">
        {{ product.name }}
      </h2>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsItem',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 40px;
  position: relative;
}

.product-info {
  align-self: end;
}

.product-image {
  border-radius: 4px;
  overflow: hidden;
  height: 100px;
}
</style>

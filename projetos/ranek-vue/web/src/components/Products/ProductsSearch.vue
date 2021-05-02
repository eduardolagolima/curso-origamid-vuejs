<template>
  <form>
    <input
      id="search"
      v-model="search"
      type="text"
      placeholder="Buscar..."
    >
    <input
      id="search-icon"
      type="submit"
      value=""
      @click.prevent="getProducts"
    >
  </form>
</template>

<script>
export default {
  name: 'ProductsSearch',
  data() {
    return {
      search: '',
    };
  },
  created() {
    if (this.$route.query.q) {
      this.search = this.$route.query.q;
    }
  },
  methods: {
    getProducts() {
      if (this.search !== this.$route.query.q) {
        this.$router.push({ query: { q: this.search } });
      }
    },
  },
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

#search {
  width: 100%;
  padding: 20px;
  border: none;
}

#search:focus,
#search:hover {
  transform: scale(1.1);
}

#search-icon {
  width: 62px;
  height: 62px;
  background: url("../../assets/search.svg") no-repeat center center;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: none;
}
</style>

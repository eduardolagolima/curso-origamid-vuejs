<template>
  <header>
    <nav>
      <router-link
        :to="{ name: 'home' }"
        class="brand"
      >
        <img
          src="../assets/ranek.svg"
          alt="Ranek"
        >
      </router-link>
      <router-link
        v-if="$store.state.loggedIn"
        class="btn"
        :to="{ name: 'user-products' }"
      >
        {{ name }}
      </router-link>
      <router-link
        v-else
        class="btn"
        :to="{ name: 'login' }"
      >
        Vender / Login
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    name() {
      return this.$store.state.user.name.split(' ')[0];
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.brand {
  padding: 10px 0;
}

.brand img {
  width: 90px;
}
</style>

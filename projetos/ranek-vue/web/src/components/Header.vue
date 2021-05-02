<template>
  <header>
    <nav>
      <router-link
        to="/"
        class="brand"
      >
        <img
          src="../assets/ranek.svg"
          alt="Ranek"
        >
      </router-link>
      <router-link
        class="btn"
        to="/login"
      >
        Vender / Login
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
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

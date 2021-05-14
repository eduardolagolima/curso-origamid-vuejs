<template>
  <section class="user">
    <nav class="side-nav">
      <ul>
        <li>
          <router-link :to="{ name: 'user-products' }">
            Produtos
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'user-purchases' }">
            Compras
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'user-sales' }">
            Vendas
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'user-edit-profile' }">
            Editar perfil
          </router-link>
        </li>
        <li>
          <button @click="logout">
            Sair
          </button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'User',
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.user {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 900px;
  margin: 40px auto;
  grid-gap: 30px;
  padding: 20px;
}

@media screen and (max-width: 500px) {
  .user {
    grid-template-columns: 1fr;
    margin: 0px auto;
  }
}

.side-nav a,
.side-nav button {
  padding: 10px;
  display: block;
  background: #f4f7fc;
  margin-bottom: 10px;
  border-radius: 4px;
}

.side-nav a.router-link-exact-active,
.side-nav a:hover,
.side-nav button:hover {
  background: #87f;
  color: #fff;
}

.side-nav button {
  border: none;
  width: 100%;
  font-size: 1rem;
  text-align: left;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
}
</style>

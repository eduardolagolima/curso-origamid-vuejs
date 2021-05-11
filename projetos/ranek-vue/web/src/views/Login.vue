<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        name="email"
      >
      <label for="password">Senha</label>
      <input
        id="password"
        v-model="password"
        type="password"
        name="password"
      >
      <button
        class="btn"
        @click.prevent="login"
      >
        Entrar
      </button>
    </form>
    <p class="forgot-password">
      <a
        href="/"
        target="_blank"
      >
        Esqueceu a senha? Clique aqui!
      </a>
    </p>
    <Register />
  </section>
</template>

<script>
import Register from '../components/Register.vue';

export default {
  name: 'Login',
  components: {
    Register,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      this.$store.dispatch('getUser', this.email);
      this.$router.push({ name: 'user' });
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.forgot-password {
  text-align: center;
  margin: 20px auto 0 auto;
}

.forgot-password a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>

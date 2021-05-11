<template>
  <form>
    <label for="name">Nome</label>
    <input
      id="name"
      v-model="name"
      name="name"
      type="text"
    >
    <label for="email">Email</label>
    <input
      id="email"
      v-model="email"
      name="email"
      type="email"
    >
    <label for="password">Senha</label>
    <input
      id="password"
      v-model="password"
      name="password"
      type="password"
    >
    <label for="zip_code">Cep</label>
    <input
      id="zip_code"
      v-model="zip_code"
      name="zip_code"
      type="text"
    >
    <label for="state">Estado</label>
    <input
      id="state"
      v-model="state"
      name="state"
      type="text"
    >
    <label for="city">Cidade</label>
    <input
      id="city"
      v-model="city"
      name="city"
      type="text"
    >
    <label for="neighborhood">Bairro</label>
    <input
      id="neighborhood"
      v-model="neighborhood"
      name="neighborhood"
      type="text"
    >
    <label for="street">Rua</label>
    <input
      id="street"
      v-model="street"
      name="street"
      type="text"
    >
    <label for="number">Numero</label>
    <input
      id="number"
      v-model="number"
      name="number"
      type="text"
    >
    <div class="button">
      <slot />
    </div>
  </form>
</template>

<script>
export default {
  name: 'UserForm',
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>

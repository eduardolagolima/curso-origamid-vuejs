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
    <label for="cep">Cep</label>
    <input
      id="cep"
      v-model="cep"
      name="cep"
      type="text"
      @keyup="searchCep"
    >
    <label for="state">Estado</label>
    <input
      id="state"
      v-model="state"
      disabled
      name="state"
      type="text"
    >
    <label for="city">Cidade</label>
    <input
      id="city"
      v-model="city"
      disabled
      name="city"
      type="text"
    >
    <label for="neighborhood">Bairro</label>
    <input
      id="neighborhood"
      v-model="neighborhood"
      disabled
      name="neighborhood"
      type="text"
    >
    <label for="street">Rua</label>
    <input
      id="street"
      v-model="street"
      disabled
      name="street"
      type="text"
    >
    <label for="number">Numero</label>
    <input
      id="number"
      ref="number"
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
import { mapFields } from '../../helpers';
import getCep from '../../services/cep';

export default {
  name: 'UserForm',
  computed: {
    ...mapFields({
      fields: [
        'name',
        'email',
        'password',
        'cep',
        'state',
        'city',
        'neighborhood',
        'street',
        'number',
      ],
      object: 'user',
      mutation: 'UPDATE_USER',
    }),
  },
  methods: {
    async searchCep() {
      try {
        const cep = this.cep.replace(/\D/g, '');

        if (cep.length === 8) {
          const response = await getCep(cep);
          const {
            uf: state,
            localidade: city,
            bairro: neighborhood,
            logradouro: street,
          } = response.data;

          this.state = state;
          this.city = city;
          this.neighborhood = neighborhood;
          this.street = street;

          this.$refs.number.focus();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
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

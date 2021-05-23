<template>
  <section>
    <h2>Endereço de envio</h2>
    <UserForm>
      <button
        class="btn"
        @click.prevent="checkout"
      >
        Finalizar compra
      </button>
    </UserForm>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import UserForm from './User/UserForm.vue';

import api from '../services/api';

export default {
  name: 'Checkout',
  components: {
    UserForm,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(['loggedIn', 'user']),
  },
  methods: {
    ...mapActions(['register', 'login']),
    async createTransaction() {
      try {
        const data = {
          purchaser_id: this.user.email,
          seller_id: this.product.users_id,
          product: this.product,
          address: {
            cep: this.user.cep,
            state: this.user.state,
            city: this.user.city,
            neighborhood: this.user.neighborhood,
            street: this.user.street,
            number: this.user.number,
          },
        };

        await api.post('/transactions', data);
        this.$router.push({ name: 'user-purchases' });
      } catch (error) {
        console.log(error);
      }
    },
    async createUser() {
      try {
        await this.register(this.user);
        await this.login(this.user.email);
      } catch (error) {
        console.log(error);
      }
    },
    async checkout() {
      if (!this.loggedIn) {
        await this.createUser();
      }

      await this.createTransaction();
    },
  },
};
</script>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}

.btn {
  background: #e80;
}
</style>

<template>
  <section>
    <h2>Crie a Sua Conta</h2>
    <transition mode="out-in">
      <button
        v-if="!showForm"
        class="btn"
        @click="showForm = true"
      >
        Criar Conta
      </button>
      <UserForm v-else>
        <button
          class="btn btn-form"
          @click.prevent="register"
        >
          Criar Usuário
        </button>
      </UserForm>
    </transition>
  </section>
</template>

<script>
import UserForm from './User/UserForm.vue';

export default {
  name: 'Register',
  components: {
    UserForm,
  },
  data() {
    return {
      showForm: false,
    };
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch('createUser', this.$store.state.user);
        await this.$store.dispatch('getUser', this.$store.state.user.email);
        this.$router.push({ name: 'user' });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.btn-form {
  max-width: 100%;
}
</style>

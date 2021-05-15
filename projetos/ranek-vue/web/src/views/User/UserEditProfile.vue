<template>
  <section>
    <UserForm>
      <button
        class="btn"
        @click.prevent="editProfile"
      >
        Editar
      </button>
    </UserForm>
  </section>
</template>

<script>
import UserForm from '../../components/User/UserForm.vue';

import api from '../../services/api';

export default {
  name: 'UserEditProfile',
  components: {
    UserForm,
  },
  methods: {
    async editProfile() {
      try {
        await api.put(
          `/users/${this.$store.state.user.id}`,
          this.$store.state.user,
        );
        this.$store.dispatch('getUser');
        this.$router.push({ name: 'user-products' });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>

</style>

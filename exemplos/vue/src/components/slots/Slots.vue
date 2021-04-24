<template>
  <div>
    <!-- Pode ser usado o v-slot: ou # -->
    <ModalPrincipal>
      <template v-slot:header>
        <p>Esse é o header</p>
      </template>

      <template #default>
        <p>Esse é o parágrafo</p>
      </template>

      <template v-slot:user=" { user } ">
        <p>User: {{user.nome}}</p>
      </template>

      <template #footer>
        <p>Esse é o footer</p>
      </template>
    </ModalPrincipal>
  </div>
</template>

<script>
import ModalPrincipal from './ModalPrincipal.vue';

export default {
  name: 'Slots',
  components: {
    ModalPrincipal
  }
};
</script>

<style>
</style>
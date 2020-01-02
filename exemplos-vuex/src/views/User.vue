<template>
  <div>
    <!-- Maneira 1 -->
    <!-- <h1>User: {{$store.state.user}}</h1> -->

    <!-- Maneira 2 -->
    <!-- <h1>User: {{user}}</h1> -->

    <!-- Maneira 3 -->
    <h1>User: {{user}} / Idade: {{idadeExtenso}} / Quantidade de aulas feitas: {{quantidadeAulasFeitas}}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      idade: 24
    }
  },
  // <!-- Maneira 2 -->
  // computed: {
  //   user() {
  //     return this.$store.state.user;
  //   }
  // }
  // Maneira 3
  computed: {
    ...mapState(["user", "quantidadeAulasFeitas"]),
    idadeExtenso() {
      return this.idade + ' anos'
    }
  }
};
</script>

<style>
</style>
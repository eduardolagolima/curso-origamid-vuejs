<template>
  <div>
    <input type="text" v-model="novoUsuario">
    <button @click="mudarUsuario">Mudar usuário</button>
    <span> | </span>
    <button @click="COMPLETAR_AULA">Completar aula</button>
    <h1>User: {{usuario}} / Idade: {{idadeExtenso}} / Quantidade de aulas feitas: {{quantidadeAulasCompletas}}</h1>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      idade: 24,
      novoUsuario: null
    }
  },
  methods: {
    // o spread operator serve para conseguir usar mais methods após o uso da função mapMutations
    ...mapMutations(["MUDAR_USUARIO", "COMPLETAR_AULA"]),
    mudarUsuario() {
      this.MUDAR_USUARIO({
        novoUsuario: this.novoUsuario
      });
    }
  },
  computed: {
    // o spread operator serve para conseguir usar mais computed properties após o uso da função mapState
    ...mapState(["usuario", "quantidadeAulasCompletas"]),
    idadeExtenso() {
      return this.idade + ' anos'
    }
  }
};
</script>

<style>
</style>
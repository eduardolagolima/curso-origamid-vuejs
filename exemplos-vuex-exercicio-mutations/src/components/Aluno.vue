<template>
  <div>
    <h1>Aluno</h1>
    <h3>Aulas completas</h3>
    <ul>
      <li v-for="aula in listaAulasCompletas" :key="aula.nome">
        <p>{{aula.nome}} | {{aula.duracao}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Aluno",
  computed: mapState(["listaAulasCompletas"])
};
</script>

<style>
</style>
<template>
  <div>
    <h3>Aulas</h3>
    <ul>
      <li v-for="aula in listaAulas" :key="aula.nome">
        <p>{{aula.nome}} | {{aula.duracao}}</p>
        <button v-if="listaAulasCompletas.includes(aula)" disabled>Aula Completa</button>
        <button v-else @click="COMPLETAR_AULA(aula)">Completar aula</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Aulas",
  computed: mapState(["listaAulas", "listaAulasCompletas"]),
  methods: mapMutations(["COMPLETAR_AULA"])
};
</script>

<style>
</style>
<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <transition>
      <div v-if="data" class="conteudo">
        <div>
          <h1>{{data.titulo}}</h1>
          <p>{{data.descricao}}</p>
        </div>
        <ul class="cursos">
          <li v-for="curso in data.cursos" :key="curso.id">
            <h2>
              <router-link
                :to="{name: 'curso', params: {curso: curso.id}}"
              >{{curso.nome}} - {{curso.totalAulas}} aulas | {{curso.horas}} horas</router-link>
            </h2>
            <p>{{curso.descricao}}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Cursos",
  mixins: [fetchData]
};
</script>

<style scoped>
  .cursos li {
    margin-bottom: 40px;
  }
</style>

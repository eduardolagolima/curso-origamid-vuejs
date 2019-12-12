<template>
  <div>
    <h1>{{curso}}</h1>
    <nav>
      <!-- maneira errada -->
      <!-- <router-link :to="`/cursos/${curso}/descricao`">Descrição</router-link>
      <router-link :to="`/cursos/${curso}/aulas`">Aulas</router-link> -->
      <router-link :to="{name: 'descricao'}">Descrição</router-link>
      <router-link :to="{name: 'aulas'}">Aulas</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Cursos',
  props: ['curso'],
  beforeRouteUpdate(to, from, next) {
    next();
  }
};
</script>

<style>
</style>
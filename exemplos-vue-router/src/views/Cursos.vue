<template>
  <div>
    <h1>Curso ativo: {{curso}}</h1>
    <router-link :to="{name: 'curso', params: { curso: 'html'}}">HTML</router-link>
    <router-link :to="{name: 'curso', params: { curso: 'javascript'}}">Javascript</router-link>
    <router-link :to="{name: 'curso', params: { curso: 'css'}}">CSS</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Cursos',
  props: ['curso'],
  // Quando é passado a prop nao tem necessidade de acessar através do this.$route.params.curso ou pelo computed
  // computed: {
  //   curso() {
  //     return this.$route.params.curso || 'Cursos';
  //   }
  // },
  created() {
    // Vai chamar apenas uma vez
    // console.log('O componente cursos foi criado!');
  },
  beforeRouteUpdate(to, from, next) {
    // console.log(
    //   'Router atualizado | to: ' +
    //     to.params.curso +
    //     ' | from: ' +
    //     from.params.curso
    // );
    next();
  }
};
</script>

<style>
</style>
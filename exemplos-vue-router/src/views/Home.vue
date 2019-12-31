<template>
  <h1 @click="navegarCursos">Home</h1>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    navegarCursos() {
      this.$router.push('cursos');
    }
  }
}
</script>

<style>

</style>
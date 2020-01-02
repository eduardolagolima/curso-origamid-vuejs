<template>
  <div id="app">
    <User/>
    <hr>
    <Curso/>
  </div>
</template>

<script>
import User from "@/views/User.vue";
import Curso from "@/views/Curso.vue";

export default {
  name: "app",
  components: {
    User,
    Curso
  }
};
</script>

<style>
</style>

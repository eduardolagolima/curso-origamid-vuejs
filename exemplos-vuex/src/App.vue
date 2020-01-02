<template>
  <div id="app">
    <User/>
    <hr>
    <Curso/>
    <hr>
    <pre>{{$store.state.cep}}</pre>
  </div>
</template>

<script>
import User from "@/views/User.vue";
import Curso from "@/views/Curso.vue";
import { mapActions } from "vuex";

export default {
  name: "app",
  components: {
    User,
    Curso
  },
  methods: mapActions(["fetchCep"]),
  created() {
    this.fetchCep()
  }
};
</script>

<style>
</style>

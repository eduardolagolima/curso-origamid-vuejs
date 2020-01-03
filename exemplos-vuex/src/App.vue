<template>
  <div id="app">
    <User/>
    <hr>
    <Curso/>
    <hr>
    <pre>{{cep}}</pre>
    <hr>
    <p>Livros</p>
    <pre>{{livros}}</pre>
    <hr>
    <p>Livros Lidos</p>
    <pre>{{livrosLidos(true)}}</pre>
    <hr>
    <p>Livros não Lidos</p>
    <pre>{{livrosLidos(false)}}</pre>
  </div>
</template>

<script>
import User from "@/views/User.vue";
import Curso from "@/views/Curso.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    User,
    Curso
  },
  computed: {
    ...mapState(["cep", "livros"]),
    ...mapGetters(["livrosLidos"])
  },
  methods: mapActions(["fetchCep"]),
  created() {
    this.fetchCep()
  }
};
</script>

<style>
</style>

<template>
  <div>
    <h1>Curso: {{curso}}</h1>
    <Aula />
  </div>
</template>

<script>
import Aula from "@/views/Aula.vue";

export default {
  name: "Curso",
  data() {
    return {
      curso: "Javascript"
    }
  },
  components: {
    Aula
  }
};
</script>

<style>
</style>
<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else>
      <h1>Cursos</h1>
      <pre>{{data}}</pre>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Cursos",
  mixins: [fetchData]
};
</script>

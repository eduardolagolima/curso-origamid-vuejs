<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else>
      <h1>Contato</h1>
      <pre>{{data}}</pre>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Contato",
  mixins: [fetchData]
};
</script>

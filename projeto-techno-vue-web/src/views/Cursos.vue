<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <transition>
      <div v-if=data>
        <h1>Cursos</h1>
        <pre>{{data}}</pre>
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

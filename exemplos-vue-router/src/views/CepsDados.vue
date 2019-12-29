<template>
  <div>
    <div v-if="loading">
      <p>Carregando...</p>
    </div>
    <div v-else>
      <pre>{{jsonCep}}</pre>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cep"],
  data() {
    return {
      loading: true,
      jsonCep: null
    };
  },
  methods: {
    async obterJsonCep(cep) {
      this.loading = true;
      this.cep = null;

      // Feedback
      await new Promise(resolve => setTimeout(resolve, 1000));

      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(r => r.json())
        .then(r => {
          this.jsonCep = r;
          this.loading = false;
        });
    }
  },
  created() {
    this.obterJsonCep(this.cep);
  },
  beforeRouteUpdate(to, from, next) {
    this.obterJsonCep(to.params.cep);
    next();
  }
};
</script>

<style>
</style>
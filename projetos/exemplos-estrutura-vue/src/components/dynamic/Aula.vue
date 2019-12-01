<template>
  <div>
    <button @click="componenteAtivo = 'AulaDescricao'">AulaDescricao</button>
    <button @click="componenteAtivo = 'AulaDownload'">AulaDownload</button>
    <!-- Cria/Destroi sempre os componentes -->
    <!-- <component :is="componenteAtivo"></component> -->
    
    <!-- Não destroi os componentes, apenas cria caso não exista ainda na tela -->
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>
import AulaDescricao from './aula/AulaDescricao.vue';
import AulaDownload from './aula/AulaDownload.vue';

export default {
  name: 'Aula',
  data() {
    return {
      componenteAtivo: 'AulaDescricao'
    }
  },
  components: {
    AulaDescricao,
    AulaDownload
  }
}
</script>

<style>

</style>
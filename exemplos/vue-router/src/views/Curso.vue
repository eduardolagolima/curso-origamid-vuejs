<template>
  <div>
    <h1>{{curso}}</h1>
    <nav>
      <!-- maneira errada -->
      <!-- <router-link :to="`/cursos/${curso}/descricao`">Descrição</router-link>
      <router-link :to="`/cursos/${curso}/aulas`">Aulas</router-link>-->
      <router-link :to="{name: 'descricao'}">Descrição</router-link>
      <router-link :to="{name: 'aulas'}">Aulas</router-link>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Cursos",
  props: ["curso"],
  beforeRouteEnter(to, from, next) {
    // Antes de entrar no router, não tem acesso ao this
    next(vm => {
      // vm = this
      // console.log(vm);
    });
  },
  beforeRouteUpdate(to, from, next) {
    // console.log(this);
    next();
    // Quando um router já ativo é atualizado
  },
  beforeRouteLeave(to, from, next) {
    // Antes de sair do router
    // next("/") é possível passar outros caminhos para o next()
    next();
  }
};
</script>

<style>
</style>
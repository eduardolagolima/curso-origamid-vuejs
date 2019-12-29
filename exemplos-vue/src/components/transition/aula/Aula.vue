<template>
  <div>

    <button @click="ativo = !ativo">Ativar/Desativar</button>
    
    <transition>
      <h1 v-show="ativo">Aula Transition</h1>
    </transition>
    
    <transition name="fade">
      <h1 v-show="ativo">Aula Transition</h1>
    </transition>

    <transition
      enter-active-class="animarOpacidade"
      leave-active-class="animarOpacidade"
      leave-to-class="zerarOpacidade"
      enter-class="zerarOpacidade"
    >
      <h1 v-show="ativo">Aula Transition</h1>
    </transition>

    <transition name="fade" @enter="enter" @leave="leave">
      <h1 v-show="ativo">Aula Transition</h1>
    </transition>

    <transition appear>
      <h1>Aula Transition</h1>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'Aula',
  data() {
    return {
      ativo: true
    }
  },
  methods: {
    enter(elemento) {
      console.log('chamou enter');
      console.log(elemento);
    },
    leave(elemento) {
      console.log('chamou leave');
      console.log(elemento);
    }
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active,

.fade-enter-active,
.fade-leave-active,

.animarOpacidade {
  transition: opacity 0.5s;
}

.v-enter,
.v-leave-to,

.fade-enter,
.fade-leave-to,

.zerarOpacidade {
  opacity: 0;
}
</style>
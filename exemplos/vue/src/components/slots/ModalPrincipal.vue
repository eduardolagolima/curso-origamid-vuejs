<template>
  <div>
    <slot name="header"></slot>

    <h1>Esse é o título</h1>
    <h2>{{user.nome}}</h2>

    <slot></slot>

    <slot name="user" :user="user"></slot>

    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'ModalPrincipal',
  data() {
    return {
      user: {
        nome: 'Eduardo'
      }
    }
  }
}
</script>

<style>

</style>
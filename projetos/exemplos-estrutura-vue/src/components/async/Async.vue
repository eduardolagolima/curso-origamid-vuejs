<template>
  <div>
    Async
    <br>
    <ComponenteUm/>
    <ComponenteDois/>
  </div>
</template>

<script>
export default {
  name: 'Async',
  components: {
    ComponenteUm: () => import('./ComponenteUm.vue'),
    ComponenteDois: () => import('./ComponenteDois.vue')
  }
}
</script>

<style>

</style>
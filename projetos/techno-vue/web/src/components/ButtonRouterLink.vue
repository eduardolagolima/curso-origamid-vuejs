<template>
  <router-link class="btn-router-link" tag="button" :to="to">{{description}}</router-link>
</template>

<script>
export default {
  name: "ButtonRouterLink",
  props: ["to", "description"]
};
</script>

<style scoped>
.btn-router-link {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 15px 40px;
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
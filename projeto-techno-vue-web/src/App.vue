<template>
  <div id="app">
    <Header></Header>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #234;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

a.router-link-exact-active {
  color: #4b8;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>

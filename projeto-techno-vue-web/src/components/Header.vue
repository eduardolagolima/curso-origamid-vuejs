<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/home">Techno</router-link>
      </div>
      <ul>
        <li>
          <router-link to="/cursos">Cursos</router-link>
        </li>
        <li>
          <router-link to="/contato">Contato</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
header {
  background: #234;
}

header a {
  color: white;
}

nav {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 20px;
}

.logo a {
  font-size: 1.2rem;
  color: white;
}

ul {
  align-self: center;
}

ul li {
  display: inline-block;
}

li a {
  padding: 0 10px;
  margin-left: 10px;
}

a.router-link-active {
  color: #4b8;
}
</style>
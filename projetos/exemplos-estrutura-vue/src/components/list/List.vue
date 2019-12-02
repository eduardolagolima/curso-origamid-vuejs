<template>
  <div>
    <transition-group tag="ul">
      <li v-for="({nome, idade}, index) in pessoas" :key="nome">
        <p>{{nome}}</p>
        <p>{{idade}}</p>
        <button @click="remover(index)">Remover</button>
      </li>
    </transition-group>

    <hr>

    <button @click="filtroCrescente">A - Z</button>
    <button @click="filtroDecrescente">Z - A</button>

    <transition-group tag="ul">
      <li class="filmes" v-for="filme in filmes" :key="filme">
        <p>{{filme}}</p>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      pessoas: [
        {
          nome: "Fulano",
          idade: 25
        },
        {
          nome: "Ciclano",
          idade: 18
        },
        {
          nome: "Beltrano",
          idade: 30
        }
      ],
      filmes: [
        'Filme 2',
        'Filme 1', 
        'Filme 4', 
        'Filme 3'
      ]
    };
  },
  methods: {
    remover(index) {
      this.pessoas.splice(index, 1);
    },
    filtroCrescente() {
      this.filmes.sort();
    },
    filtroDecrescente() {
      this.filmes.sort().reverse();
    }
  }
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-move {
  transition: transform 0.3s;
}

.filmes {
  list-style: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: white;
  padding: 5px;
  max-width: 200px;
  margin-bottom: 10px;
  text-align: center;
}
</style>
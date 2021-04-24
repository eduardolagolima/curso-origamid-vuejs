<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <transition>
      <div v-if="data" class="conteudo">
        <div>
          <h1>Sobre a {{data.titulo}}</h1>
          <p>{{data.descricao}}</p>
          <ButtonRouterLink to="/cursos" description="Cursos" />
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avaliacao in data.avaliacoes" :key="avaliacao.nome">
                <p>{{avaliacao.nome}}</p>
                <p>{{avaliacao.descricao}}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender.png" alt="Aprender" />
      </div>
    </transition>
  </div>
</template>

<script>
import ButtonRouterLink from "@/components/ButtonRouterLink.vue";
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Home",
  mixins: [fetchData],
  components: {
    ButtonRouterLink
  }
};
</script>



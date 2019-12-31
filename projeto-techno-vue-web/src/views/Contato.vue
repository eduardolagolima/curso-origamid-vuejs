<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <transition>
      <div v-if="data">
        <h1>{{data.titulo}}</h1>
        <p>{{data.descricao}}</p>
        <ul>
          <li>
            <strong>Telefone:</strong>
            {{data.contato.telefone}}
          </li>
          <li>
            <strong>E-mail:</strong>
            {{data.contato.email}}
          </li>
          <li>
            <strong>Endereço:</strong>
            {{data.contato.endereco}}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "Contato",
  mixins: [fetchData]
};
</script>

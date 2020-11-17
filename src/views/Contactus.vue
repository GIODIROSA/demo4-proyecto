<template>
  <v-container>
    <!-- INICIO DE FORMULARIO -->
    <v-btn
      dark
      block
      color="deep-purple lighten-3"
      :to="{ name: 'Formulario' }"
    >
      Ver Formulario de contacto
    </v-btn>
    <router-view />
    <!-- FINAL DE FORMULARIO -->
    <!-- ENVIAR COMENTARIOS A LOS ARTISTAS -->
    <h1>Inicio</h1>
    <router-link to="/agregar">
      <v-btn>AGREGAR</v-btn>
    </router-link>
    <ul>
      <li v-for="(item, index) in comentarios" :key="index">
        {{ item.data.nombre }} - {{ item.id }}
        <router-link :to="`/editar/${item.id}`">
          <v-btn
            @click="comprar(item.id)"
            block
            depressed
            dark
            color="indigo accent-1"
          >
            EDITAR
          </v-btn>
        </router-link>
        <v-btn
          class="my-5"
          block
          dark
          depressed
          color="red darken-1"
          @click="eliminarComentario(item.id)"
          >Eliminar</v-btn
        >
      </li>
    </ul>

    <!-- FINAL COMENTARIOS A LOS ARTISTAS -->
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Contactous",
  data() {
    return {};
  }, //final de data
  computed: {
    ...mapState("Comentarios", ["comentarios"]),
  },
  methods: {
    ...mapActions("Comentarios", ["eliminarComentario"]),
    comprar() {
      alert("funcionando");
    },
  },
};
</script>

<style lang="scss" scoped></style>

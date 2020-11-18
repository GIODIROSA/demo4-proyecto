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
    <div class="tituloComentario">
      <h1>{{ comentario }}</h1>
    </div>
    <div class="ma-5">
      <router-link to="/agregar">
        <v-btn dark color="light-blue lighten-2" block> AGREGAR </v-btn>
      </router-link>
    </div>

    <!-- CARD COMENTARIOS -->
    <div>
      <v-card
        class="ma-2 purple accent-1"
        v-for="(item, index) in comentarios"
        :key="index"
      >
        <v-chip
          class="ma-2 text-caption
        "
          color="purple lighten-1 "
          label
          text-color="white"
        >
          <v-icon left>
            mdi-label
          </v-icon>
          {{ item.id }}
        </v-chip>
        <v-card-text class="textoDataNombre">
          {{ item.data.nombre }}
        </v-card-text>
        <v-divider></v-divider>

        <div class="purple lighten-3">
          <router-link :to="`/editar/${item.id}`">
            <v-btn @click="comprar(item.id)" class="ma-2" icon color="purple accent-4">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </router-link>
          <v-btn
            icon
            @click="eliminarComentario(item.id)"
            color="amber darken-4"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </v-card>
    </div>

    <!-- FINAL COMENTARIOS A LOS ARTISTAS -->
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Contactous",
  data() {
    return {
      comentario: "COMENTARIOS",
    };
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

<style lang="scss" scoped>
.tituloComentario {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 60px 0;
}
.textoDataNombre {
  color: #6a1b9a;
}
</style>

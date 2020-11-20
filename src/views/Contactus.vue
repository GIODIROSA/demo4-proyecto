<template>
  <div>
    <div>
      <h1 class="tituloComentario deep-purple lighten-2">
        <span class="modificarTituloComentario">{{ comentario }}</span>
      </h1>
    </div>

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

      <div class="ma-10">
        <p class="text-caption">
          Puedes agregar un comentario para los artistas invitados al AUFIELDS
          2021
        </p>
        <router-link to="/agregar">
          <v-btn color="purple accent-4" block> AGREGAR </v-btn>
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
              <v-btn
                @click="editar(item.id)"
                class="ma-2"
                icon
                color="purple accent-4"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </router-link>
            <v-btn icon @click="eliminar(item.id)" color="amber darken-4">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </v-card>
      </div>

      <!-- FINAL COMENTARIOS A LOS ARTISTAS -->
    </v-container>
  </div>
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
    editar() {
      this.$swal("Muy bien!", "Puedes editar el comentario!", "success");
    },
    eliminar(id) {
      this.eliminarComentario(id);
      this.$swal("Cuidado!", "Borraste el comentario!", "error");
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
  .modificarTituloComentario {
    color: #b39ddb;
  }
}
.textoDataNombre {
  color: #6a1b9a;
}
</style>

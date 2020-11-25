<template>
  <div>
    <router-link :to="{ name: 'Contact Us' }">
      <Parallaxeditar />
    </router-link>
    <v-container>
      <v-row>
        <v-col>
          <!-- INICIO CARD DE EDITAR -->
          <v-card color="cyan lighten-4">
            <!-- CHIP IDENTIFICADOR -->
            <v-chip
              class="ma-2 text-caption
        "
              color="cyan darken-1 "
              label
              text-color="white"
            >
              <v-icon left>
                mdi-label
              </v-icon>
              {{ comentario.id }}
            </v-chip>
            <!-- FINAL CHIP IDENTIFICADOR -->
            <v-card-title class="tituloEditarComentario">
              EL COMENTARIO
            </v-card-title>
            <v-card-subtitle class="subTituloEditarComentario text-caption">
              Podrás editar el comentario y volverlo a enviar
            </v-card-subtitle>
            <!-- FORM DE EDICIÓN DE COMENTARIO -->
            <form
              @submit.prevent="editarComentario(comentario)"
              class="formulario ma-5"
            >
              <div>
                <v-text-field
                  v-model="comentario.nombre"
                  hide-details="auto"
                ></v-text-field>
              </div>
              <div class="text-caption">
                <p class="vistaPrevia">
                  vista previa del comentario: {{ comentario.nombre }}
                </p>
              </div>
              <button icon type="submit" class="btnEditar_test my-5">
                <v-icon color="cyan darken-2">mdi-pencil</v-icon>
                Debes dar click
              </button>
            </form>
          </v-card>
          <!-- FINAL CARD DE EDITAR -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Parallaxeditar from "@/components/comentarios/Parallaxeditar.vue";
export default {
  name: "Editar",
  components: {
    Parallaxeditar,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.obtenerComentario(this.id);
  },
  methods: {
    ...mapActions("Comentarios", ["obtenerComentario", "editarComentario"]),
  },
  computed: {
    ...mapState("Comentarios", ["comentario"]),
  },
};
</script>

<style lang="scss" scoped>
.tituloEditarComentario {
  color: #00838f;
}
.subTituloEditarComentario {
  color: #bdbdbd;
}
.vistaPrevia {
  color: #00838f;
}
</style>

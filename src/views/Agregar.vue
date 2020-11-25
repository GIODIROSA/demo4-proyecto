<template>
  <div>
    <div>
      <router-link :to="{ name: 'Contact Us' }">
        <Parallaxagregar />
      </router-link>
    </div>
    <v-container>
      <v-row>
        <v-col>
          <v-card color="teal accent-1">
            <v-card-title class="tituloAgregar">
              AGREGAR
            </v-card-title>
            <v-card-subtitle class="subtituloAgregar">
              Podrás agregar un comentario para los artistas
            </v-card-subtitle>
            <!-- FORM DE AGREGAR COMENTARIO -->
            <form class="form_test mx-4" @submit.prevent="agregarComentario(nombre)">
              <div>
                <v-text-field
                  color="teal lighten-2"
                  type="text"
                  v-model="nombre"
                  label="Agregar comentario"
                  hide-details="auto"
                  class="agregarComentario_test"
                ></v-text-field>
                <p class="vistaPreviaAgregar text-caption">
                  Vista previa del comentario: {{ nombre }}
                </p>
              </div>
              <button class="btnAgregar_test my-5" icon type="submit">
                <v-icon color="teal accent-4">mdi-check</v-icon> Debes dar click
                para agregar
              </button>
            </form>
          </v-card>
          <!-- FINAL DE CARD DE AGREGAR COMENTARIO -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Parallaxagregar from "@/components/comentarios/Parallaxagregar.vue";
export default {
  name: "Agregar",
  components: {
    Parallaxagregar,
  },
  data() {
    return {
      nombre: "",
    };
  },
  methods: {
    ...mapActions("Comentarios", ["agregarComentario"]),
  },
};
</script>

<style lang="scss" scoped>
.vistaPreviaAgregar {
  color: #00695c;
}
.tituloAgregar {
  color: #26a69a;
}
</style>

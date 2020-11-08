<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-container>
          <div class="botonMedioTransporte">
            <h5 class="mensajeTravel font-weight-light">
              <span class="notaTravel font-weight-bold">Nota: </span> Para
              revisar de que manera puedes llegar al concierto
            </h5>
            <v-btn block color="lime accent-3" dark v-bind="attrs" v-on="on">
              Medios de transporte
            </v-btn>
          </div>
        </v-container>
      </template>
      <v-card>
        <v-toolbar dark color="purple accent-1">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Medios para llegar a AUFIELDS</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark :to="{ name: 'Travel' }" text @click="dialog = false">
              TRAVEL
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader
            >Diferentes medios para que vengas a disfrutar del evento más grande
            de música electrónica</v-subheader
          >
        </v-list>
        <v-divider></v-divider>
        <!-- MODAL - DIALOG -->
        <v-container>
          <v-row>
            <v-col
              cols="12"
              lg="12"
              v-for="travel in travels"
              :key="travel.id"
            >
              <div class="my-5">
                <h1>{{ travel.data.titulo }}</h1>
                <h5>{{ travel.data.medio }}</h5>
              </div>

              <img
                class="imagenTransporte"
                :src="travel.data.imagen"
                :alt="travel.id"
              />
              <h5>{{ travel.data.lugar }}</h5>
              <!-- <h5>{{ travel.data.opcional }}</h5> -->

              <p class="textoDescripcionTravel text-justify font-weight-light py-3">
                {{ travel.data.descripcion }}
              </p>
            </v-col>
          </v-row>
          <!-- FINAL DE LOS MEDIOS DE TRANSPORTE -->
          <!-- MENSAJE PARA COMPARTIR VEHICULO -->
          <v-divider inset class="py-2"></v-divider>
          <h1 class="tituloCompartir">
            ¿Porqué no compartes?
          </h1>
          <p class="text-justify font-weight-light py-3 ">
            Dirígete para encontrar viajeros que se dirigen desde tu área o para
            alquilar tus propios asientos para el automóvil para que otros se
            unan a ti. Los propietarios de automóviles establecen su propio
            precio para compartir el costo del combustible, y es una forma
            barata y ecológica de hacer nuevos amigos y encontrar socios
            delirantes para toda la vida.
          </p>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      show: false,
    };
  }, //final de data
  computed: {
    ...mapState("Travel", ["travels"]),
  },
};
</script>

<style lang="scss" scoped>
.imagenTransporte {
  width: 800px;
}
.textoDescripcionTravel{
  font-size: 14px;
  color: #757575;
}
</style>

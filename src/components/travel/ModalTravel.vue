<template>
  <div>
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
              <h5
                class="mensajeTravel ma-5 font-weight-light py-3 d-flex justify-center"
              >
                <span class="modificarNota font-weight-bold">Nota : </span>
                Para revisar de que manera puedes llegar al concierto
              </h5>
            </div>
            <div class="d-flex justify-center">
              <v-btn
                id="btnTravelModal"
                class="ma-5"
                color="lime darken-1"
                dark
                v-bind="attrs"
                v-on="on"
              >
                Medios de transporte
              </v-btn>
            </div>
          </v-container>

          <!-- CUERPO DEL MODAL-->
        </template>
        <v-card>
          <v-toolbar dark color="purple accent-1">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Medios para llegar a AUFIELDS</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark :to="{ name: 'Inicio' }" text @click="dialog = false">
                INICIO
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-list three-line subheader>
            <v-alert outlined type="success" text>
              Diferentes medios para que vengas a disfrutar del evento más
              grande de música electrónica
            </v-alert>
          </v-list>
          <v-divider></v-divider>
          <!-- MODAL - DIALOG -->
          <!-- PARALLAX -->
          <v-parallax :src="imagenInterna">
            <h1 class="text-center teal accent-3">
              "TODOS LOS CAMINOS LLEGAN A
              <span class="modificacionTituloTravel">AUFIELDS CHILE-2021</span>"
            </h1>
          </v-parallax>
          <!-- FINAL PARALLAX -->
          <!-- CONTENIDO DE DIALOG -->
          <v-container>
            <v-row>
              <v-col
                class="columnaTravel"
                cols="12"
                sm="12"
                md="6"
                lg="6"
                v-for="travel in travels"
                :key="travel.id"
              >
                <v-card class="mx-auto" max-width="600">
                  <v-img
                    class="imagenTravel white--text align-end"
                    height="500px"
                    :src="travel.data.imagen"
                  >
                  </v-img>

                  <v-card-title
                    class="tituloTravelMedioTransporte text-caption"
                  >
                    {{ travel.data.titulo }}
                  </v-card-title>

                  <v-card-subtitle class="pb-0">
                    {{ travel.data.medio }}
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>
                      <p
                        class="textoDescriptivo py-3 text-justify font-weight-light"
                      >
                        {{ travel.data.descripcion }}
                      </p>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <!-- FINAL CONTENIDO DE  -->
            <!-- MENSAJE PARA COMPARTIR VEHICULO -->
            <v-divider inset class="py-2"></v-divider>
            <h1 class="tituloCompartir">
              {{ tituloComparte }}
            </h1>
            <p class="text-justify font-weight-light py-3 ">
              {{ textoComparte }}
            </p>
            <div class="d-flex justify-center">
              <router-link class="modalTravel" :to="{ name: 'Inicio' }">
                <v-btn class="btnModalTravel ma-3" dark color="teal accent-3">
                  Volver a Inicio
                </v-btn>
              </router-link>
            </div>
          </v-container>
        </v-card>
      </v-dialog>
    </v-row>
    <!-- LINK DE REDES SOCIALES -->
    <div class="d-flex justify-center ma-3">
      <v-btn v-for="(icon, index) in icons" :key="index" class="mx-4 " icon>
        <a class="linkRedes" :href="icon.link">
          <v-icon color="purple lighten-3" size="24px"
            >{{ icon.redes }}
          </v-icon></a
        >
      </v-btn>
    </div>
    <!-- FINAL DE LOS ICONOS DE REDES -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      icons: [
        { redes: "mdi-facebook", link: "https://www.facebook.com/" },
        { redes: "mdi-twitter", link: "https://twitter.com/?lang=en" },
        { redes: "mdi-linkedin", link: "https://www.linkedin.com/" },
        { redes: "mdi-instagram", link: "https://www.instagram.com/" },
      ],
      imagenInterna:
        "https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/ambiente%2Ftravelinterno.png?alt=media&token=644072e0-e59c-47f1-a096-948dca39bcc8",
      tituloComparte: "¿Porqué no compartes?",
      textoComparte:
        "Dirígete para encontrar viajeros que se dirigen desde tu área o para alquilar tus propios asientos para el automóvil para que otros se unan a ti. Los propietarios de automóviles establecen su propio precio para compartir el costo del combustible, y es una forma barata y ecológica de hacer nuevos amigos y encontrar socios delirantes para toda la vida.",
    };
  }, //final de data
  computed: {
    ...mapState("Travel", ["travels"]),
  },
};
</script>

<style lang="scss" scoped>
.imagenTravel {
  filter: grayscale(60%);
}
.tituloTravelMedioTransporte {
  color: #42a5f5;
}
.tituloCompartir {
  color: #ff80ab;
}
.textoDescriptivo {
  color: #757575;
}
.modificarNota {
  color: #ff1744;
}
.linkRedes {
  text-decoration: none;
}
.modalTravel {
  text-decoration: none;
}
</style>

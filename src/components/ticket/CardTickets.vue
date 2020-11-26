<template>
  <div>
    <v-container>
      <!-- ENCABEZADO Y NORMATIVA -->
      <div class="encabezado">
        <!-- BTN INICIO -->
        <div class="btnInicio">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                dark
                small
                class="ma-2"
                color="amber darken-1"
                :to="{ name: 'Inicio' }"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </template>
            <span>INICIO</span>
          </v-tooltip>
        </div>

        <!-- BTN FINAL -->

        <h1 class="tituloTicket">
          <span class="modificacionTicket">TI</span>CKETS
        </h1>
        <h5 class="subtituloTicket pb-5">
          06 y 07 de NOVIEMBRE/ CLUB HÍPICO
        </h5>
        <!-- BTN DE NORMATIVA -->
        <v-btn
          tile
          dark
          class="btnNormativa"
          color="blue accent-4"
          @click="accionarNormativa"
        >
          <v-icon left>
            mdi-police-badge-outline
          </v-icon>
          NORMATIVA
        </v-btn>
      </div>
      <!-- INICIO DE DIALOG -->

      <v-dialog v-model="dialog" width="800px">
        <v-card
          color="cyan lighten-4"
          v-for="(instruccion, index) in normativasConcierto"
          :key="index"
        >
          <v-card-title
            class="tituloNormativa pt-2 px-4 font-weight-regular amber accent-1"
          >
            Normativas
          </v-card-title>
          <v-card-text
            class="textoNormativa tex-justify py-4 font-weight-light"
          >
            {{ instruccion.data.normativas }}
          </v-card-text>
          <v-divider></v-divider>
          <v-card-title
            class="tituloIdentificatoria font-weight-regular light-green lighten-4 pt-2 px-4"
          >
            Tipos identificación
          </v-card-title>
          <v-card-text
            class="textoIdentificatorio text-justify py-4 font-weight-light"
          >
            {{ instruccion.data.identificacion }}
          </v-card-text>
          <v-divider></v-divider>
          <v-card-title
            class="tituloEntrada font-weight-regular deep-purple lighten-4 pt-2 px-4"
          >
            Venta de entradas
          </v-card-title>
          <v-card-text
            class="textoIdentificatorio text-justify py-4 font-weight-light"
          >
            {{ instruccion.data.ingreso }}
          </v-card-text>
          <v-divider></v-divider>
          <v-btn
            dark
            block
            color="green lighten-4"
            class="btnCerrar_test py-5"
            @click="accionarNormativa"
          >
            Cerrar
          </v-btn>
        </v-card>
      </v-dialog>

      <!-- FIN DEL DIALOG -->

      <v-row>
        <!-- INICIO DE LA COL DE CARD TICKET -->
        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="3"
          v-for="ticket in ticketsDisponibles"
          :key="ticket.id"
        >
          <v-card
            :color="ticket.data.color"
            :loading="loading"
            class="cardtickets_test mx-auto my-12"
            max-width="474"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="450" :src="ticket.data.imagen"></v-img>

            <v-card-title class="tituloTipo font-weight-bold cyan accent-3">{{
              ticket.data.tipo
            }}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>

              <div class="py-3 subtitle-1 text-caption font-weight-medium">
                Selección de área: {{ ticket.data.area }}
              </div>

              <v-divider></v-divider>

              <div class="nombreArtistas_test my-4 pa-2 subtitle-1 text-caption">
                <span class="modificacionArtista font-weight-bold">
                  Presentación de artistas:
                </span>
                {{ ticket.data.artistas }}
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text
              ><span class="modificacionFecha font-weight-bold">{{
                ticket.data.fecha
              }}</span></v-card-text
            >

            <!-- BTN DE COMPRAR PARAMS DINAMICA -->

            <div>
              <router-link
                class="routerLinkComprar ma-2"
                :to="`/tickets/${ticket.id}`"
              >
                <v-btn
                  @click="comprar(ticket.id)"
                  id="comprarTest"
                  class="comprar_test"
                  block
                  depressed
                  dark
                  color="indigo accent-1"
                >
                  Comprar
                </v-btn>
              </router-link>
            </div>

            <!-- FINAL BTN DE COMPRAR PARAMS DINAMICA -->
          </v-card>
        </v-col>
        <!-- FINAL DE LA COL DE CARD TICKET -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CardTickets",
  props: ["ticketsDisponibles"],
  data() {
    return {
      loading: false,
      selection: 1,
      dialog: false,
    };
  },
  // mounted() {
  //   this.dialog = true;
  // },
  methods: {
    accionarNormativa() {
      this.dialog = !this.dialog;
    },
    comprar(id) {
      this.$swal(`Numero de ticket: ${id}`, "Eres lo máximo!", "success");
    },
  }, //final de methods
  computed: {
    ...mapState("Tickets", [
      "normativasConcierto",
      "identificacion",
      "entrada",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.encabezado {
  .tituloTicket {
    text-align: center;
    font-weight: 900;
    font-size: 50px;
    color: #00e5ff;
  }

  .modificacionTicket {
    color: #c6ff00;
  }

  .subtituloTicket {
    text-align: center;
    color: #f48fb1;
    font-weight: 300;
    font-size: 16px;
  }

  .btnNormativa {
    display: block;
    margin: auto;
  }
}
//DIALOG======>
.tituloNormativa {
  color: #ffb300;
}
.tituloIdentificatoria {
  color: #f48fb1;
}
.tituloEntrada {
  color: #f48fb1;
}

// TICKET
.tituloTipo {
  color: #e0f7fa;
}
.btnInicio {
  display: flex;
  justify-content: center;
}
.routerLinkComprar {
  text-decoration: none;
}
.modificacionArtista {
  color: #e91e63;
}
.modificacionFecha {
  color: #d500f9;
}
</style>

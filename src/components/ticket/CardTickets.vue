<template>
  <div>
    <v-container>
      <!-- ENCABEZADO Y NORMATIVA -->
      <div class="encabezado">
        <h1 class="tituloTicket">
          <span class="modificacionTicket">TI</span>CKETS
        </h1>
        <h5 class="subtituloTicket pb-5">
          06 y 07 de NOVIEMBRE/ CLUB HÍPICO
        </h5>
        <!-- BTN DE NORMATIVA -->
        <v-btn
          tile
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
        <v-card color="cyan lighten-4">
          <v-card-title
            class="tituloNormativa pt-2 px-4 font-weight-regular amber accent-1"
          >
            Normativas
          </v-card-title>
          <v-card-text
            class="textoNormativa tex-justify py-4 font-weight-light"
          >
            {{ normativas }}
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
            {{ identificacion }}
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
            {{ entrada }}
          </v-card-text>
          <v-divider></v-divider>
          <v-btn
            dark
            block
            color="green lighten-4"
            class="py-5"
            @click="accionarNormativa"
          >
            Cerrar
          </v-btn>
        </v-card>
      </v-dialog>

      <!-- FIN DEL DIALOG -->

      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="3"
          v-for="(ticket, index) in tickets"
          :key="index"
        >
          <v-card
            color="indigo lighten-4"
            :loading="loading"
            class="mx-auto my-12"
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

            <v-card-title>{{ ticket.data.tipo }}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>

              <div class="my-4 subtitle-1">
                {{ ticket.data.area }}
              </div>

              <div class="text-justify">
                {{ ticket.data.descripcion }}
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>{{ ticket.data.fecha }}</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>

                <v-chip>8:00PM</v-chip>

                <v-chip>9:00PM</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text @click="reserve">
                COMPRAR
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CardTickets",
  props: ["tickets"],
  data() {
    return {
      loading: false,
      selection: 1,
      dialog: true,
    };
  },
  mounted() {
    this.dialog = true;
  },
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    accionarNormativa() {
      this.dialog = !this.dialog;
    },
  }, //final de methods
  computed: {
    ...mapState("Tickets", ["normativas", "identificacion", "entrada"]),
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
</style>

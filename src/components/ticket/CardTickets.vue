<template>
  <div>
    <v-container>
      <div class="normativas">
        <h1 class="tituloTicket">
          <span class="modificacionTicket">TI</span>CKETS
        </h1>
        <h5 class="subtituloTicket pb-5">
          06 y 07 de NOVIEMBRE/ CLUB HÍPICO
        </h5>
        <v-divider inset class="mb-4"></v-divider>
        <h2
          class="tituloNormativa pt-2 px-2 font-weight-regular amber accent-1"
        >
          Normativas
        </h2>
        <p class="textoNormativa tex-justify py-4 font-weight-light">
          {{ normativas }}
        </p>
        <v-divider inset class="mb-4"></v-divider>
        <h2
          class="tituloIdentificatoria font-weight-regular light-green lighten-4 pt-2 px-2"
        >
          Formas aceptable de identificación
        </h2>
        <p class="textoIdentificatorio text-justify py-4 font-weight-light">
          {{ identificacion }}
        </p>
        <v-divider inset class="mb-4"></v-divider>
        <h2
          class="tituloEntrada font-weight-regular deep-purple lighten-4 pt-2 px-2"
        >
          Venta de entradas
        </h2>
        <p class="textoIdentificatorio text-justify py-4 font-weight-light">
          {{ entrada }}
        </p>
      </div>

      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="6"
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
    };
  },
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  }, //final de methods
  computed: {
    ...mapState("Tickets", ["normativas", "identificacion", "entrada"]),
  },
};
</script>

<style lang="scss" scoped>
.normativas {
  font-family: "Montserrat", sans-serif;

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

  .tituloNormativa {
    color: #ffb300;
  }
  .tituloIdentificatoria {
    color: #f48fb1;
  }
  .tituloEntrada {
    color: #f48fb1;
  }
}
</style>

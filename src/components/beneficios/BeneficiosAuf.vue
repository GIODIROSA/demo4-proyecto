<template>
  <div>
    <v-parallax height="550" src="@/assets/img/beneficios.jpg">
      <v-btn
        class="mx-auto"
        fab
        dark
        small
        color="yellow"
        :to="{ name: 'Inicio' }"
      >
        <v-icon dark>
          mdi-heart
        </v-icon>
      </v-btn>
    </v-parallax>

    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="tituloBeneficio text-center">
            BENE<span class="modificaciontitulo">FICIOS</span>
          </h1>
          <h5 class="subtituloBeneficio">AUFIELDS-CHILE 2021</h5>
        </v-col>
        <v-col cols="12" v-for="(contenido, index) in contenidos" :key="index">
          <p class="textoBeneficio text-justify font-weight-light">
            {{ contenido.data.beneficio }}
          </p>
        </v-col>
        <v-col cols="12">
          <h1 class="tituloConservenTicket yellow">
            Beneficio para los que
            <span class="modificacionConserven">conserven</span> su Ticket
          </h1>
        </v-col>

        <div class="conservenTicket">
          <h5 class="subtituloConserven font-weight-light">
            {{ mensaje }}
          </h5>
        </div>
      </v-row>
    </v-container>
    <TablaBeneficios />
    <v-container>
      <p
        v-for="(contenido, index) in contenidos"
        :key="index"
        class="ticketWeekend text-justify font-weight-light"
      >
        {{ contenido.data.conserven }}
      </p>
    </v-container>
  </div>
</template>

<script>
import TablaBeneficios from "@/components/beneficios/TablaBeneficios.vue";
export default {
  name: "BeneficiosAuf",
  components: {
    TablaBeneficios,
  },
  props: ["contenidos"],
  data() {
    return {
      mensaje:
        "Los tickets son automáticamente válidos para la próxima edición, no tienen que hacer nada para re-confirmar, y tienen los siguientes beneficios:",
    };
  },
};
</script>

<style lang="scss" scoped>
.subtituloBeneficio {
  color: #ff4081;
  text-align: center;
}
.tituloBeneficio {
  padding-top: 5px;
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  color: #c6ff00;
  .modificaciontitulo {
    color: aquamarine;
  }
}
.textoBeneficio {
  font-family: "Montserrat", sans-serif;
}
.tituloConservenTicket {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: #b388ff;
  .modificacionConserven {
    color: #ffa726;
  }
}
.subtituloConserven {
  padding: 10px;
  text-align: center;
  font-size: 16px;
  color: #757575;
}
.ticketWeekend {
  color: #757575;
}
</style>

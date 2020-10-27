<template>
  <div>
    <!-- BANNER PRINCIPAL -->
    <section>
      <div class="heroSection">
        <div class="logotipo">
          <img
            class="imagenLogotipo"
            src="../assets/img/logotipo03-02-02.svg"
            alt="logotipo"
          />
        </div>
        <v-container>
          <v-row>
            <h3 class="titleBanner display-2 white--text">CHILE 2021</h3>
            <v-btn dark class="purple accent-1" block :to="{ name: 'Tickets' }"
              >Comprar tickets Aufields</v-btn
            >
            <v-btn
              dark
              class="teal accent-3 my-3"
              block
              :to="{ name: 'LineUp' }"
              >Line Up</v-btn
            >
          </v-row>
        </v-container>
      </div>
    </section>
    <!-- FINAL BANNER PRINCIPAL -->
    <!-- AREAS DE CONCIERTO -->
    <section class="areasConcierto">
      <v-container>
        <v-row>
          <!-- COLUMNA UNO -->
          <v-col cols="12" sm="12" md="6">
            <h3 class="areaGeneraltitle">
              AREA GENERAL
            </h3>
          </v-col>
          <!-- COLUMNA DOS -->
          <v-col>
            <p>
              Más de 10 horas de música continua sonarán en los múltiples
              escenarios al aire libre del General Area bajo el ambiente
              festivalero de Creamfields Chile. El espacio contará con más de
              5.000 mt2 de sombra, puntos de hidratación gratuita, entretención
              y muchas sorpresas más para que nuestros fanáticos tengan una
              experiencia tremenda. Además, tendrá servicio de barra (con y sin
              alcohol), comida y baños.
            </p>
          </v-col>
        </v-row>
        <!-- VIP CONCIERTO -->
        <v-row>
          <!-- COLUMNA UNO -->
          <v-col cols="12" sm="12" md="6">
            <h3 class="hospitalityAreaTitle">
              AREA HOSPITALITY
            </h3>
          </v-col>
          <!-- COLUMNA DOS -->
          <v-col>
            <p>
              Para quienes quieren disfrutar de la experiencia del mundo
              Creamfields Chile de forma más cómoda, dispondremos de la zona
              Hospitality Area. Este sector estará ubicado bajo una gran carpa
              que brindará sombra y espacios más elaborados a los asistentes.
              Contará con accesos diferenciados para que tu entrada al festival
              sea más expedita y cómoda. También tendremos zonas de descanso y
              baños premium, además de especiales activaciones que
              complementarán este sector. Quienes opten por este ticket tendrán
              acceso a una zona para bailar inmediatamente al costado y frente
              al escenario principal. Además, en esta zona tendrá repetición de
              sonido de los escenarios. *No incluye bar abierto.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- PARALLAX -->
    <v-parallax dark src="../assets/img/parallax01.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">
            AUFIELDS
          </h1>
          <h4 class="subheading">
            CONCIERTO DE MÚSICA TECHNO MÁS GRANDE DE SUR AMÉRICA
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
    <!-- FINAL DE PARALLAX -->

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Inicio",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.heroSection {
  background-image: url("../assets/img/banner-inicial02.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 750px;
  .logotipo {
    display: flex;
    justify-content: center;
    align-content: center;
    padding-top: 100px;
    .imagenLogotipo {
      width: 350px;
      height: 350px;
    }
  }
}
.titleBanner {
  display: block;
  margin: auto;
  padding: 20px;
}

.areasConcierto {
  padding: 120px 0;

  .areaGeneraltitle {
    color: #80deea;
  }
  .hospitalityAreaTitle {
    color: #f48fb1;
  }
}
</style>

<template>
  <div>
    <v-container>
      <div>
        <router-link class="linkTravel" :to="{ name: 'Inicio' }">
          <h1 class="tituloTravel text-center py-5">
            TRAVEL
          </h1>
        </router-link>

        <v-divider class="py-3" inset></v-divider>
      </div>
      <v-row>
        <!-- COLUMNA 1 -->
        <v-col>
          <h1 class="tituloDondeQueda text-md-body-1 px-5 mt-5">
            {{ titulo }}
          </h1>
          <p class="descripcionDondeQueda text-justify px-5 mt-5 subtitle-1">
            {{ descripcion }}
          </p>
        </v-col>
        <!-- COLUMNA 2 -->
        <v-col>
          <v-timeline>
            <v-timeline-item color="pink" class="metroLinea1"
              >Metro Neptuno L1</v-timeline-item
            >
            <v-timeline-item color="yellow" class="metroLinea2 text-right">
              Metro Fraklin L2
            </v-timeline-item>
            <v-timeline-item color="purple" class="metroLinea6"
              >Metro Pedro Aguirre Cerda L6
              <br />
              CLUB HÍPICO
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
      <v-divider inset class="py-2"></v-divider>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Timeline",
  data() {
    return {
      titulo: "¿Dónde queda AUFIELDS?",
      descripcion:
        "Aufields Chile, es un festival de música electrónica que se celebra anualmente en el mes de noviembre en Santiago de Chile. La primera edición de Aufields Chile, fue realizada en el año 2004 con una asistencia de 12000 personas en Ciudad Empresarial y actualmente se realiza en Club Hípico.",
    };
  },
};
</script>

<style lang="scss" scoped>
.linkTravel {
  text-decoration: none;
}
.tituloTravel {
  color: #00bfa5;
}
.metroLinea1 {
  color: #26c6da;
}
.metroLinea2 {
  color: #26c6da;
}
.metroLinea6 {
  color: #26c6da;
}
.tituloDondeQueda {
  font-weight: 600;
  font-size: 30px;
  color: #ff80ab;
}
.descripcionDondeQueda {
  color: #757575;
}
</style>

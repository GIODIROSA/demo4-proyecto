<template>
  <div>
    <v-container>
      <!-- ENCABEZADO Y TITULO DE AREA DE CONCIERTO -->
      <div class="encabezadoTicketConcierto">
        <h1 class="areaConcierto pt-5">AREA DE CONCIERTO</h1>
        <h5 class="subtituloConcierto">AREAS DE TICKET | STANTARD | GOLD</h5>
      </div>
      <!-- FINAL DE ENCABEZADO Y TITULO DE AREA DE CONCIERTO -->
      <v-divider inset></v-divider>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="12"
          v-for="(area, index) in areas"
          :key="index"
        >
        <!-- CARGA E ITERACION DE DATA RENDERIZADA -->
          <h3 class="tituloArea py-4">
            {{ area.data.titulo }}
          </h3>
          <p class="textoDescripcion text-justify text-sm-body-2">
            {{ area.data.descripcion }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AreaConcierto",
  props: ["areas"],
};
</script>

<style lang="scss" scoped>
.encabezadoTicketConcierto {
  padding: 50px 0px;
  .areaConcierto {
    text-align: center;
    color: #4fc3f7;
  }
  .subtituloConcierto {
    text-align: center;
    color: #757575;
  }
}

.tituloArea {
  font-weight: 400;
  font-size: 20px;
  color: #f48fb1;
}
.textoDescripcion {
  color: #757575;
}
</style>

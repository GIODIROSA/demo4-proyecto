<template>
  <div>
    <!-- ENCABEZADO Y TITULO DE AUF GALERIA  -->
    <h1 class="tituloAuf2019 text-center purple accent-4 white--text">
      Hello <span class="aufTtitulo">AUFIELDS</span> 2019
    </h1>
    <v-container>
      <!-- COMPONENTE DE GRALERIA DE IMAGENES DE EVENTOS PASADOS -->
      <GaleriaImagen :imagenes="imagenes" />
      <router-link class="linkVolverAuf" :to="{ name: 'Inicio' }">
        <!-- BTN DE VOLVER A INICIO -->
        <v-btn
          block
          dark
          color="cyan lighten-1"
          id="BtnVolverAuf"
          class="btnVolver"
        >
          Volver al 2021
        </v-btn>
      </router-link>
      <!-- FINAL DE BTN -->
      <!-- DERECHOS RESERVADOS -->
      <div>
        <p class="textFooter text-caption text-center py-3">
          ® Todos los derechos reservados. Aufields 2021
        </p>
      </div>
    </v-container>
  </div>
</template>

<script>
import GaleriaImagen from "@/components/auf2019/GaleriaImagen.vue";
import { mapState } from "vuex";
export default {
  name: "Auf2019",
  computed: {
    ...mapState("Imagenes", ["imagenes"]),
  },
  components: {
    GaleriaImagen,
  },
};
</script>

<style lang="scss" scoped>
.aufTtitulo {
  color: #ffeb3b;
}
.tituloAuf2019 {
  font-family: "Montserrat", sans-serif;
}
.linkVolverAuf {
  text-decoration: none;
}
</style>

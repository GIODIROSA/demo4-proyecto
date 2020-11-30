<template>
  <v-app>
    <!-- COMPONENTE NAVBAR -->
    <Navbar />
    <v-main>
      <!-- TRANSICIONES DE VISTAS -->
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
      <!-- FINAL TRANSICIONES DE VISTAS -->
    </v-main>
    <!-- BARRA FOOTER GRADIENTE EN COLOR -->
    <div class="barraColorFooter"></div>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "@/components/navbar/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  data: () => ({
    //
  }),
  methods: {
    // LLAMADOS DE LOS ACTIONS DE LOS VUEX MODULES
    ...mapActions(["getDataArtista"]),
    ...mapActions("Areas", ["obtenerAreasConcierto"]),
    ...mapActions("Contenidos", ["obtenerData"]),
    ...mapActions("Tickets", ["obtenerDataTickets"]),
    ...mapActions("Tickets", ["obtenerDataNormativas"]),
    ...mapActions("Imagenes", ["obtenerImagenes", "obtenerImagenesSlider"]),
    ...mapActions("Travel", ["obtenerTravel"]),
    ...mapActions("Comentarios", [
      "obtenerDataComentarios",
      "obtenerConsultaGenerales",
    ]),
    ...mapActions("Faqs", ["obtenerFaqs"]),
  },
  created() {
    // MONTAJE EN EL HOOK DEL LLAMADO A FIREBASE POR MEDIO DE VUEX MODULES
    this.getDataArtista();
    this.obtenerAreasConcierto();
    this.obtenerData();
    this.obtenerDataTickets();
    this.obtenerDataNormativas();
    this.obtenerImagenes();
    this.obtenerImagenesSlider();
    this.obtenerTravel();
    this.obtenerDataComentarios();
    this.obtenerConsultaGenerales();
    this.obtenerFaqs();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}
html,
body {
  font-family: "Montserrat", sans-serif;
}

// CONFIGURACIÓN DE LA ANIMACIÓN PARA LA ENTRADA DE LAS VISTAS
.fade-enter-active {
  transition: all 1s ease;
}
.fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

// CONFIGURACIÓN CROMÁTICA DE LA GRADACIÓN DEL FOOTER
.barraColorFooter {
  background: #ff0000;
  background: linear-gradient(122deg, #ff0000 0%, #7100ff 80%);
  background: -webkit-linear-gradient(122deg, #ff0000 0%, #7100ff 80%);
  background: -moz-linear-gradient(122deg, #ff0000 0%, #7100ff 80%);
  height: 35px;
  width: 100%;
}
</style>

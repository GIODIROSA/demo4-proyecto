<template>
  <v-app>
    <Navbar />

    <v-main>
      <router-view />
    </v-main>
    <div class="barraColorFooter"></div>
    <Footer />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Footer from "@/components/footer/Footer.vue";
import Navbar from "@/components/navbar/Navbar.vue";
export default {
  name: "App",
  components: {
    Footer,
    Navbar,
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(["getDataArtista"]),
    ...mapActions("Areas", ["obtenerAreasConcierto"]),
    ...mapActions("Contenidos", ["obtenerData"]),
    ...mapActions("Tickets", ["obtenerDataTickets"]),
    ...mapActions("Imagenes", ["obtenerImagenes", "obtenerImagenesSlider"]),
    ...mapActions("Travel", ["obtenerTravel"]),
  },
  created() {
    this.getDataArtista();
    this.obtenerAreasConcierto();
    this.obtenerData();
    this.obtenerDataTickets();
    this.obtenerImagenes();
    this.obtenerImagenesSlider();
    this.obtenerTravel();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}
html,body{
  font-family: "Montserrat", sans-serif;

}

.barraColorFooter {
  background: #ff0000;
  background: linear-gradient(122deg, #ff0000 0%, #7100ff 80%);
  background: -webkit-linear-gradient(122deg, #ff0000 0%, #7100ff 80%);
  background: -moz-linear-gradient(122deg, #ff0000 0%, #7100ff 80%);
  height: 15px;
  width: 100%;
}
</style>

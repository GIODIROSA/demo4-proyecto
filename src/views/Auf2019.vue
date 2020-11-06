<template>
  <div>
    <h1 class="tituloAuf2019 text-center purple accent-4 white--text">
      Hello <span class="aufTtitulo">AUFIELDS</span> 2019
    </h1>
    <v-container>
      <GaleriaImagen :imagenes= "imagenes" />
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
</style>

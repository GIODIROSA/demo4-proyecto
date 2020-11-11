<template>
  <div>
    <div class="bannerLineUp">
      <Slider :sliderImagen="sliderImagen" />
    </div>
    <div class="textoCarousel"> 
      <h1 class="tituloCarousel light-green accent-1">AUFIELDS <span class="modificacionTextoCarousel font-weight-light">CHILE - 2021</span></h1>
    </div>
    <v-container>
      <v-row>
        <v-col md="6" v-for="(artista, index) in artistas" :key="index">
          <CardLineup :artista="artista" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardLineup from "@/components/lineUp/CardLineup.vue";
import Slider from "@/components/lineUp/Slider.vue";

export default {
  name: "Lineup",
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapState(["artistas"]),
    ...mapState("Imagenes", ["sliderImagen"]),
  },
  components: {
    CardLineup,
    Slider,
  },
};
</script>

<style lang="scss" scoped>
.titleDj {
  height: 15.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tituloCarousel{
  text-align: center;
  color: #B388FF;
}
.modificacionTextoCarousel{
  color: #FF6D00;
}
</style>

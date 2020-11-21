<template>
  <div>
    <div class="bannerLineUp">
      <Slider :sliderImagen="sliderImagen" />
    </div>
    <div class="videosArtistas d-flex justify-center green accent-1">
      <!-- BORIS BREJCHA -->
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/vqz8c4ZP3Wg"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <!-- CHARLOTTE DE WITTE -->
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/3cOOu52n26c?start=511"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <!-- MARTIN GARRIX -->
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Pnp_7IaqW74"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <!-- AMELIE LENS -->
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/d1-Xc7EfT44?start=11"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="textoCarousel">
      <h1 class="tituloCarousel light-green accent-1">
        AUFIELDS
        <span class="modificacionTextoCarousel font-weight-light"
          >CHILE - 2021</span
        >
      </h1>
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
.tituloCarousel {
  text-align: center;
  color: #b388ff;
}
.modificacionTextoCarousel {
  color: #ff6d00;
}
.videosArtistas {
  height: 350px;
}
</style>

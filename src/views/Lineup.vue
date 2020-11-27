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

    <!-- BTN CHAT -->
    <div>
      <v-container>
        <h4 class="chatear_artistas text-caption text-center my-5">
          ¡Ahora podrás chatear con nuestros artistas invitados!
        </h4>
        <div class="d-flex justify-center">
          <router-link class="linkChat" :to="{ name: 'Chat' }">
            <v-btn id="btnchat_test" dark class="amber darken-2">
              CHATEA CON NUESTROS ARTISTAS
            </v-btn>
          </router-link>
        </div>
      </v-container>
    </div>

    <!-- FINAL BTN CHAT -->

    <v-container>
      <v-row>
        <v-col md="6" v-for="(artista, index) in artistas" :key="index">
          <CardLineup :artista="artista" />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <div>
        <h5 id="notaArtista" class="text-caption text-center">
          ¡Los artistas Dj, los máximos exponentes de la música electrónica
          reunidos en un solo concierto! 06 y 07 de Noviembre de 2021 Santiago-
          Chile.
        </h5>
      </div>
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
.linkChat {
  text-decoration: none;
}
.chatear_artistas {
  color: #9fa8da;
}
</style>

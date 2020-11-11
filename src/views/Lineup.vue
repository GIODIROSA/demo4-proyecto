<template>
  <div>
    <div class="bannerLineUp">
      <Slider :sliderImagen = "sliderImagen" />
    </div>
    <v-container>
      <v-row>
        <v-col md="6" v-for="(artista, index) in artistas" :key="index">
          <CardLineup :artista="artista" />
        </v-col>
      </v-row>
    </v-container>
    <!-- fin dialog -->
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
</style>

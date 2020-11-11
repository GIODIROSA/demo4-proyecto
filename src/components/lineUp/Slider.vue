<template>
  <div class="slider">
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in sliderImagen"
        :key="i"
        :src="item"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Slider",
  props: ["sliderImagen"],
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.slider {
  height: 500px;
}
</style>

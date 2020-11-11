<template>
  <div class="slider">
    <div
      v-for="(imagen, index) in sliderImagen"
      :key="index"
      :style="`background-image:url(${imagen})`"
      class="sliderContenido"
    ></div>
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
  height: 100vh;
  overflow: scroll;
  background-color: beige;
  scroll-snap-type: y mandatory;
  .sliderContenido {
    height: 100%;
    background-position: center;
    background-size: cover;
    scroll-snap-align: center;
  }
}
</style>

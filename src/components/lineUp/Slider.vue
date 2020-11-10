<template>
  <div>
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in imagenes"
        :key="i"
        :src="item"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("Imagenes", ["imagenes"]),
  },
};
</script>

<style></style>

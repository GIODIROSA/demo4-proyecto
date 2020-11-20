<template>
  <div>
    <v-parallax dark :src="imagenParallaxEditar">
      <v-row align="center" justify="center"> </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "Parallaxeditar",
  data() {
    return {
      imagenParallaxEditar:
        "https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/ambiente%2Fcascologin.png?alt=media&token=da289f12-c9b9-4469-a9e9-0698c11448d7",
    };
  },
};
</script>

<style></style>

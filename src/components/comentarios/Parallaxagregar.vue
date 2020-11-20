<template>
  <div>
    <v-parallax
      dark
      height="550"
      :src="imagenParallaxAgregar"
      class="parallaxAgregarComentario"
    >
      <v-row align="center" justify="center"> </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "Parallaxagregar",
  data() {
    return {
      imagenParallaxAgregar:
        "https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/ambiente%2Fcasco01.png?alt=media&token=e7d21499-50ac-408d-823c-6116bebe631b",
    };
  },
};
</script>

<style lang="scss" scoped>
.parallaxAgregarComentario {
  filter: grayscale(30%);
}
</style>

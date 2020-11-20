<template>
  <div>
    <v-parallax
      dark
      src="@/assets/img/casco01.png"
      class="parallaxAgregarComentario"
    >
      <v-row align="center" justify="center"> </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "Parallaxagregar",
};
</script>

<style lang="scss" scoped>
.parallaxAgregarComentario {
  filter: grayscale(30%);
}
</style>

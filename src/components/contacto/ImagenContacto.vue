<template>
  <v-parallax dark :src="imagenConsultas">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">
          AUFIELDS CHILE 2021
        </h1>
        <h4 class="subheading">
          SIEMPRE ESTAMOS ATENTOS
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: "ImagenContacto",
  data() {
    return {
      imagenConsultas:
        "https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/ambiente%2Fconsultas.png?alt=media&token=e3d27a4f-ebc8-4d54-b097-24e2d23bfb2c",
    };
  },
};
</script>

<style lang="scss" scoped></style>

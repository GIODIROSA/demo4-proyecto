<template>
  <v-parallax dark :src="imagenParallaxCarrito">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-black mb-4">
          ¡Añadido Ticket correctamente!
        </h1>
        <h4 class="subheading">
          ¡Estas a pasos de ir al cielo en AUFIELDS CHILE 2021!
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: "ParallaxCarrito",
  data() {
    return {
      imagenParallaxCarrito:
        "https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/ambiente%2Fbanner-carrito.png?alt=media&token=63030353-1d36-417d-ad41-684bc2ab1fe7",
    };
  },
};
</script>

<style></style>

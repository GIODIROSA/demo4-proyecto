<template>
  <div>
    <v-parallax dark :src="imagenParallaxChat">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="tituloChat">📌CHAT</h1>
          <p class="text-caption font-weight-bold">
            Podrás chatear en directo con tus artistas favorito, AUFIELDS 2021
          </p>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "ParallaxChat",
  data() {
    return {
      imagenParallaxChat:
        "https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/ambiente%2Ftravelinterno.png?alt=media&token=644072e0-e59c-47f1-a096-948dca39bcc8",
    };
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <v-parallax class="parallaxFaqs" dark src="@/assets/img/16.png">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <img
            class="mascaraFaqs"
            src="@/assets/img/mascara02.png"
            alt="imagen"
          />
          <h1 class="tituloFaqs display-1 font-weight-black mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <h4 class="subtituloFaqs">
            ¡Todas tus inquietudes en un solo lugar!
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "ImagenFaqs",
};
</script>

<style lang="scss" scoped>
.parallaxFaqs {
  filter: grayscale(25%);
}
.mascaraFaqs {
  width: 350px;
  height: 250px;
}
.tituloFaqs{
     color: #E0F7FA;
  text-shadow: 1px 1px 1px black;
}
.subtituloFaqs {
  color: #E0F7FA;
  text-shadow: 1px 1px 1px black;
}
</style>

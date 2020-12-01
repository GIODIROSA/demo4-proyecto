<template>
  <div>
    <!-- PARALLAX CON RUTA A INICIO PARA RETORNO -->
    <router-link class="linkfaqs" :to="{ name: 'Inicio' }">
      <v-parallax class="parallaxFaqs" dark :src="imagenParallaxFaqs">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <!-- IMAGEN LOCAL PARA HACER UNA YUXTAPOSICIÓN AL EFECTO PARALLAX -->
            <img
              class="mascaraFaqs"
              src="@/assets/img/mascara02.png"
              alt="imagen"
            />
            <!-- TITULO DE FAQS DENTRO DEL PARALLAX -->
            <h1 class="tituloFaqs display-1 font-weight-black mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <h4 class="subtituloFaqs">
              ¡Todas tus inquietudes en un solo lugar!
            </h4>
            <!-- FINAL DE TITULO DE FAQS -->
          </v-col>
        </v-row>
      </v-parallax>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ImagenFaqs",
  data() {
    return {
      imagenParallaxFaqs:
        "https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/ambiente%2F16.png?alt=media&token=6a8e8e16-e56a-4bd8-b048-9dbd948e58a0",
    };
  },
};
</script>

<style lang="scss" scoped>
.linkfaqs {
  text-decoration: none;
}
.parallaxFaqs {
  filter: grayscale(25%);
}
.mascaraFaqs {
  width: 350px;
  height: 250px;
}
.subtituloFaqs {
  color: #e0f7fa;
  text-shadow: 1px 1px 1px black;
}
</style>

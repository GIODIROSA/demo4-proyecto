<template>
  <div>
    <!-- PARALLAX PARA ENCABEZADO DE 404 NOT FOUND -->
    <v-parallax height="950" dark :src="imagen404">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="textoError404 display-1 font-weight-bold mb-4">
            404 AMIG(X).... ¡TE FUISTE AL OTRO MUNDO CON LA DOSIS!
          </h1>
          <!-- BTN CON LINK RUTA PARA RETORNAR A INICIO -->
          <router-link :to="{ name: 'Inicio' }" class="linkInicio_404">
            <v-btn @click="volver" color="lime">
              REGRESA AL MUNDO
            </v-btn>
          </router-link>
          <!-- FINAL DE BTN -->
        </v-col>
      </v-row>
    </v-parallax>
    <!-- FINAL DE PARALLAX -->
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      imagen404:
        "https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/ambiente%2F404error.png?alt=media&token=f33fc9a3-7370-41b6-ab21-5f3e1f105eb0",
    };
  },
  methods: {
    volver() {
      this.$swal("PUFF❤️!", "¡REGRESASTE, NOS PREOCUPAMOS!", "success");
    },
  },
};
</script>

<style lang="scss" scoped>
.linkInicio_404 {
  text-decoration: none;
}
.textoError404 {
  text-shadow: 2px 2px black;
}
</style>

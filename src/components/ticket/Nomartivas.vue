<template>
  <div class="normativas">
   
    <v-divider inset class="mb-4"></v-divider>
    <h2 class="tituloNormativa pt-2 px-2 font-weight-regular amber accent-1">
      Normativas
    </h2>
    <p class="textoNormativa tex-justify py-4 font-weight-light">
      {{ normativas }}
    </p>
    <v-divider inset class="mb-4"></v-divider>
    <h2
      class="tituloIdentificatoria font-weight-regular light-green lighten-4 pt-2 px-2"
    >
      Formas aceptable de identificación
    </h2>
    <p class="textoIdentificatorio text-justify py-4 font-weight-light">
      {{ identificacion }}
    </p>
    <v-divider inset class="mb-4"></v-divider>
    <h2
      class="tituloEntrada font-weight-regular deep-purple lighten-4 pt-2 px-2"
    >
      Venta de entradas
    </h2>
    <p class="textoIdentificatorio text-justify py-4 font-weight-light">
      {{ entrada }}
    </p>
  </div>
</template>

<script>
export default {
    name="Normativas"
};
</script>

<style lang="scss" scoped>
.normativas {
  font-family: "Montserrat", sans-serif;

  .tituloNormativa {
    color: #ffb300;
  }
  .tituloIdentificatoria {
    color: #f48fb1;
  }
  .tituloEntrada {
    color: #f48fb1;
  }
}
</style>

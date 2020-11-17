<template>
  <v-container>
    <!-- INICIO DE FORMULARIO -->
    <v-btn
      dark
      block
      color="deep-purple lighten-3"
      :to="{ name: 'Formulario' }"
    >
      Ver Formulario de contacto
    </v-btn>
    <router-view />
    <!-- FINAL DE FORMULARIO -->
    <!-- ENVIAR COMENTARIOS A LOS ARTISTAS -->

    
    <!-- FINAL COMENTARIOS A LOS ARTISTAS -->


  </v-container>
</template>

<script>
export default {
  name: "Contactous",
  data() {
    return {
      formAgregar: true,
    };
  }, //final de data
};
</script>

<style lang="scss" scoped>

</style>
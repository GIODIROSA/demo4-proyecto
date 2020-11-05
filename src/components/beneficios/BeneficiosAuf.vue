<template>
  <div>
    <v-container>
      <h1>probando componente</h1>
      <p class="text-justify">
        {{ beneficios }}
      </p>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "BeneficiosAuf",
  props: ["beneficios"],
};
</script>

<style></style>

<template>
  <div>
    <h1>
      hola a todos
    </h1>
    <p>el Numero de Ticket es: {{ this.$route.params.id }}</p>
    <h1>probando d enuevo</h1>
    <v-btn class="ma-3" @click="alert">Probando</v-btn>
  </div>
</template>

<script>
export default {
  name: "Carrito",
  methods: {
    alert() {
      this.$swal("Good job!", "You clicked the button!", "success");
    },
  },
};
</script>

<style></style>

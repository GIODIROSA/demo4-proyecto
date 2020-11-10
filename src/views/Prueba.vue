<template>
  <div>
    <h1>Esto seria la simulación de la vista ticket</h1>
    <br />
    <div v-for="ticket in tickets" :key="ticket.id">
      <router-link :to="`/prueba/${ticket.id}`">
        {{ ticket.data.tipo }}
        <br />
        <v-btn @click="comprar(ticket.id)">Comprar</v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Prueba",

  computed: {
    ...mapState("Tickets", ["tickets"]),
  }, //final de computed
  methods: {
    comprar(id) {
      alert(`Numero de ticket: ${id}`);
    },
  },
};
</script>

<style scoped></style>

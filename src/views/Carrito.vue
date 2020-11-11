<template>
  <div>
    <h1>
      hola a todos
    </h1>
    <p>el Numero de Ticket es: {{ this.$route.params.id }}</p>
    <div v-for="(ticket, index) in obtenerTicket" :key="index">

        <p>{{ticket.data.tipo}}</p>
        <p>{{ticket.data.fecha}}</p>
        <p>{{ticket.data.descripcion}}</p>


    </div>
    <h1>probando de nuevo</h1>
    <v-btn class="ma-3" @click="alert">Probando</v-btn>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Carrito",
  props: ["id"],
  computed: {
    ...mapGetters("Tickets", ["busqueda_ticket"]),
    obtenerTicket() {
      return this.busqueda_ticket(this.id);
    },
  },
  methods: {
    alert() {
      this.$swal("Gracias!", "You clicked the button!", "success");
    },
  },
};
</script>

<style></style>

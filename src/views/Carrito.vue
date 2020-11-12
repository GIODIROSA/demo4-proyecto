<template>
  <div>
    <CardCarrito :obtenerTicket="obtenerTicket" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardCarrito from "@/components/carrito/CardCarrito.vue";
export default {
  name: "Carrito",
  props: ["id"],
  components: {
    CardCarrito,
  },
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

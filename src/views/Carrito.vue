<template>
  <div>
    <ParallaxCarrito />
    <div>
      <p class="light-blue lighten-4 pa-3 font-weight-light text-caption">
        {{ info }}
      </p>
    </div>

    <CardCarrito :obtenerTicket="obtenerTicket" />

    <div>
      <v-container>
        <v-row>
          <v-btn dark block color="red accent-1" :to="{ name: 'Tickets' }">
            Volver a Tickets
          </v-btn>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import CardCarrito from "@/components/carrito/CardCarrito.vue";
import ParallaxCarrito from "@/components/carrito/ParallaxCarrito.vue";

export default {
  name: "Carrito",
  props: ["id"],
  components: {
    CardCarrito,
    ParallaxCarrito,
  },

  computed: {
    ...mapState("Carrito", ["info"]),
    ...mapGetters("Tickets", ["busqueda_ticket"]),
    obtenerTicket() {
      let id = this.id
      return this.busqueda_ticket(id);
    },
  },
  methods: {
    alert() {
      this.$swal("Gracias!", "You clicked the button!", "success");
    },
  },
};
</script>

<style lang="scss" scoped></style>

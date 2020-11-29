<template>
  <div>
    <router-link class="linkCarrito" :to="{ name: 'Tickets' }">
      <ParallaxCarrito />
    </router-link>
    <div>
      <v-alert icon="mdi-shield-lock-outline" prominent text type="info">
        {{ info }}
      </v-alert>
    </div>

    <CardCarrito :obtenerTicket="obtenerTicket" />

    <div>
      <v-container>
        <v-row>
          <v-btn
            dark
            block
            class="volverTicket_test"
            color="red accent-1"
            :to="{ name: 'Tickets' }"
          >
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
      let id = this.id;
      return this.busqueda_ticket(id) || { data: {} };
    },
  },
  methods: {
    alert() {
      this.$swal("Gracias!", "You clicked the button!", "success");
    },
  },
};
</script>

<style lang="scss" scoped>
.linkCarrito {
  text-decoration: none;
}
</style>

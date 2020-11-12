<template>
  <div class="bannercarrito">
    <ParallaxCarrito />

    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          v-for="ticket in obtenerTicket"
          :key="ticket.id"
        >
          <v-card class="mx-auto" max-width="344">
            <v-img :src="ticket.data.imagen" height="400px"></v-img>

            <v-card-title>
              {{ ticket.data.tipo }}
            </v-card-title>

            <v-card-subtitle>
              {{ ticket.data.area }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text>
                Descripción
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ ticket.data.descripcion }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <!-- FINAL DE CARD TICKET -->
        <!-- INICIO DE CARD BOLETA DE COMPRA -->
        <v-col cols="12" sm="6" md="8" lg="8">
          <v-card class="mx-auto" max-width="644">
            <v-card-title>
              Boleta de Ticket AUFIELDS
            </v-card-title>
            <!-- PROBANDO -->
            <v-card-title>
              {{ ticketSeleccionado.tipoTicket }}
            </v-card-title>

            <v-card-subtitle>
              {{ ticketSeleccionado.areaTicket }}
            </v-card-subtitle>
          </v-card>
        </v-col>

        <!-- FINAL DE CARD BOLETA DE COMPRA -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ParallaxCarrito from "@/components/carrito/ParallaxCarrito.vue";
export default {
  name: "CardCarrito",
  props: ["obtenerTicket"],
  components: {
    ParallaxCarrito,
  },
  data() {
    return {
      show: false,
      ticketSeleccionado: {
        tipoTicket: "",
        areaTicket: "",
        idTicketSeleccionado: "",
      },
    };
  },
  computed: {
    seleccionTicket() {
     return this.obtenerTicket.forEach((el) => {
        this.ticketSeleccionado.tipoTicket = el.data.tipo;
        this.ticketSeleccionado.areaTicket = el.data.area;
        this.ticketSeleccionado.idTicketSeleccionado = el.id;
      });
    },
  },
};
</script>

<style></style>

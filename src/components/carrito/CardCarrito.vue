<template>
  <div class="bannercarrito">
    <ParallaxCarrito />

    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="8"
          lg="8"
          v-for="ticket in obtenerTicket"
          :key="ticket.id"
        >
          <v-card class="mx-auto yellow accent-4" max-width="500">
            <v-img :src="ticket.data.imagen" height="400px"></v-img>

            <v-card-title>
              {{ ticket.data.tipo }}
            </v-card-title>

            <v-card-subtitle>
              {{ ticket.data.area }}
            </v-card-subtitle>

            <v-spacer></v-spacer>

            <v-card-title class="precioTicketSeleccionado d-flex justify-end">
              Valor: $ {{ ticket.data.precio }}
            </v-card-title>

            <v-card-actions>
              <v-btn color="orange accent-4" text>
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

                <v-card-text
                  class="descripcionTicketSeleccionado text-justify font-weight-light"
                >
                  {{ ticket.data.descripcion }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <!-- FINAL DE CARD TICKET -->
        <!-- INICIO DE CARD BOLETA DE COMPRA -->
        <v-col cols="12" sm="6" md="4" lg="4">
          <v-card class="mx-auto" max-width="700">
            <v-card-title class="tituloBoleta font-weight-bold">
              {{ tituloBoleta }}
            </v-card-title>

            <v-card-text class="text-caption teal accent-2 text-center py-3">
              {{ ticketSeleccionado.idTicketSeleccionado }}
            </v-card-text>

            <v-card-title class="text-caption">
              Tipo de ticket: {{ ticketSeleccionado.tipoTicket }}
            </v-card-title>

            <v-card-subtitle class="text-caption font-weight-ligh">
              Area seleccionada: {{ ticketSeleccionado.areaTicket }}
            </v-card-subtitle>

            <v-divider></v-divider>

            <v-card-text class="NotaCarrito">
              (Impuestos Incluidos)
              <br />
              Opciones de financiación
              <br />
              Hasta 6x $11.495.00 más interés
              <br />
              Bancario
            </v-card-text>
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
      tituloBoleta: "Tu carrito AUFIELDS",
      ticketSeleccionado: {
        tipoTicket: "",
        areaTicket: "",
        idTicketSeleccionado: "",
      },
    };
  },
  mounted() {
      this.seleccionTicket();
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

<style lang="scss" scoped>
.precioTicketSeleccionado {
  color: #78909C;
}
.descripcionTicketSeleccionado {
  color: #FF5722;
}
.tituloBoleta {
  color: #aeea00;
}
.NotaCarrito {
  color: #e0e0e0;
}
</style>

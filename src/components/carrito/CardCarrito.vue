<template>
  <div class="bannercarrito">
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

            <v-card-title class="tipoTicketSeleccionado font-weight-bold">
              {{ ticket.data.tipo }}
            </v-card-title>

            <v-card-subtitle class="lime my-2 py-4">
              Area correspondiente:
              <span class="areaSeleccionada font-weight-bold">{{
                ticket.data.area
              }}</span>
            </v-card-subtitle>

            <v-divider></v-divider>

            <v-card-subtitle class="blue lighten-4 my-2 py-4">
              Artistas:
              <span class="areaSeleccionada font-weight-bold">{{
                ticket.data.artistas
              }}</span>
            </v-card-subtitle>
            <v-divider></v-divider>

            <v-spacer></v-spacer>

            <div class="valorTicketSeleccionado">
              <v-card-subtitle>
                Valor de cada ticket:
              </v-card-subtitle>
              <v-card-title
                class="precioTicketSeleccionado d-flex justify-end amber accent-1"
              >
                Valor: $ {{ ticket.data.precio }}
              </v-card-title>
            </div>

            <v-divider></v-divider>

            <v-card-subtitle>
              Elegir la cantidad de Ticket
            </v-card-subtitle>

            <div class="d-flex justify-center">
              <v-select
                class="ma-4"
                v-model="cantidad"
                :items="entradas"
                label="Agregar cantidad de ticket"
                dense
                outlined
              ></v-select>
              <v-card-subtitle
                >Solo puedes comprar 5 entradas como número
                máximo</v-card-subtitle
              >
            </div>

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

            <v-card-subtitle class="text-caption font-weight-ligh">
              <span class="modificacionArtista font-weight-bold"
                >Artistas:</span
              >
              {{ ticketSeleccionado.artistasTicket }}
            </v-card-subtitle>

            <v-divider></v-divider>
            <v-card-title> Cantidad de Ticket: {{ cantidad }} </v-card-title>

            <v-divider></v-divider>
            <v-card-title>
              Total: $ {{ ticketSeleccionado.precioticket }}
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="NotaCarrito">
              {{ impuesto }}
            </v-card-text>

            <v-divider></v-divider>

            <v-card-subtitle>
              <v-btn block>
                Pagar
              </v-btn>
            </v-card-subtitle>
          </v-card>
        </v-col>

        <!-- FINAL DE CARD BOLETA DE COMPRA -->
      </v-row>
    </v-container>
    <pre>
      {{ $data }}
    </pre>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "CardCarrito",
  props: ["obtenerTicket"],
  data() {
    return {
      show: false,
      tituloBoleta: "",
      cantidad: 1,
      entradas: [],
      //objeto de ticket seleccionado
      ticketSeleccionado: {
        tipoTicket: "",
        areaTicket: "",
        idTicketSeleccionado: "",
        stockTicket: "",
        artistasTicket: "",
        precioticket: "",
      },
    };
  },
  methods: {},
  computed: {
    ...mapState("Carrito", ["impuesto"]),
    ...mapGetters("Tickets", ["cantidadEntrada"]),

    cantidadEntradaSeleccionada() {
      const id = this.ticketSeleccionado.idTicketSeleccionado;
      return this.cantidadEntrada(id);
    },

    numeroEntradasPermitidas() {
      let numeroEntrada = [1, 2, 3, 4, 5];
      return numeroEntrada.forEach((e) => this.entradas.push(e));
    },

    tituloBoletaCarrito() {
      this.tituloBoleta = "Resumen de Boleta";
    },

    seleccionTicket() {
      return this.obtenerTicket.forEach((el) => {
        this.ticketSeleccionado.tipoTicket = el.data.tipo;
        this.ticketSeleccionado.areaTicket = el.data.area;
        this.ticketSeleccionado.stockTicket = el.data.stock;
        this.ticketSeleccionado.artistasTicket = el.data.artistas;
        this.ticketSeleccionado.precioticket = el.data.precio;
        this.ticketSeleccionado.idTicketSeleccionado = el.id;
      });
    },
  },
  mounted() {
    this.seleccionTicket;
    this.numeroEntradasPermitidas;
    this.tituloBoletaCarrito;
    this.cantidadEntradaSeleccionada;
  },
};
</script>

<style lang="scss" scoped>
.tipoTicketSeleccionado {
  color: #6a1b9a;
  font-size: 30px;
}
.areaSeleccionada {
  color: #ff5722;
}
.precioTicketSeleccionado {
  color: #78909c;
}
.descripcionTicketSeleccionado {
  color: #ff5722;
}
.tituloBoleta {
  color: #aeea00;
}
.NotaCarrito {
  color: #e0e0e0;
}
.modificacionArtista {
  color: #ff1744;
}
</style>

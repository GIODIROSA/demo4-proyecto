<template>
  <div class="bannercarrito">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="8" lg="8">
          <v-card class="mx-auto yellow accent-4" max-width="500">
            <v-img :src="obtenerTicket.data.imagen" height="400px"></v-img>

            <v-card-title class="tipoTicketSeleccionado font-weight-bold">
              {{ obtenerTicket.data.tipo }}
            </v-card-title>

            <v-card-subtitle class="lime my-2 py-4">
              Area correspondiente:
              <span class="areaSeleccionada font-weight-bold">{{
                obtenerTicket.data.area
              }}</span>
            </v-card-subtitle>

            <v-divider></v-divider>

            <v-card-subtitle class="blue lighten-4 my-2 py-4">
              Artistas:
              <span class="areaSeleccionada font-weight-bold">{{
                obtenerTicket.data.artistas
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
                Valor: $ {{ obtenerTicket.data.precio }}
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
              <v-card-subtitle class="normativaCompraTicket"
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
                  {{ obtenerTicket.data.descripcion }}
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
              {{ obtenerTicket.id }}
            </v-card-text>

            <v-card-title class="text-caption">
              Tipo de ticket: {{ obtenerTicket.data.tipo }}
            </v-card-title>

            <v-card-subtitle class="text-caption font-weight-ligh">
              Area seleccionada: {{ obtenerTicket.data.area }}
            </v-card-subtitle>

            <v-divider></v-divider>

            <v-card-subtitle class="text-caption font-weight-ligh">
              <span class="modificacionArtista font-weight-bold"
                >Artistas:</span
              >
              {{ obtenerTicket.data.artistas }}
            </v-card-subtitle>

            <v-divider></v-divider>
            <v-card-title> Cantidad de Ticket: {{ cantidad }} </v-card-title>

            <v-divider></v-divider>
            <v-card-title> Total: $ {{ total }} </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="NotaCarrito">
              {{ impuesto }}
            </v-card-text>

            <v-divider></v-divider>

            <v-card-subtitle>
              <v-btn class="btnComprarBoleta_test" color="light-blue lighten-5" block @click="comprar">
                Comprar
              </v-btn>
            </v-card-subtitle>
          </v-card>
        </v-col>

        <!-- FINAL DE CARD BOLETA DE COMPRA -->
      </v-row>
      <div class="d-flex justify-center mt-3">
        <v-btn v-for="(icon, index) in icons" :key="index" class="mx-4 " icon>
          <a class="redesLink" :href="icon.link">
            <v-icon color="light-blue lighten-4" size="24px"
              >{{ icon.redes }}
            </v-icon></a
          >
        </v-btn>
      </div>
    </v-container>
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
      icons: [
        { redes: "mdi-facebook", link: "https://www.facebook.com/" },
        { redes: "mdi-twitter", link: "https://twitter.com/?lang=en" },
        { redes: "mdi-linkedin", link: "https://www.linkedin.com/" },
        { redes: "mdi-instagram", link: "https://www.instagram.com/" },
      ],
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
  methods: {
    ...mapActions("Tickets", ["comprarTicket"]),
    comprar() {
      const ticketComprado = JSON.parse(JSON.stringify(this.obtenerTicket));
      ticketComprado.cantidad = this.cantidad;
      this.comprarTicket(ticketComprado);

      // const polera = Object.assign({}, this.getPoleraById);
      // polera.cant = this.cant;
      // this.comprarPolera(polera);
    },
  },
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

    total() {
      const precio = this.obtenerTicket.data.precio;
      const cantidad = this.cantidad;
      return precio * cantidad;
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
.redesLink {
  text-decoration: none;
}
</style>

<template>
  <nav class="navPrincipal">
    <v-toolbar dense elevation="1">
      <router-link class="linkRouterTitle" :to="{ name: 'Inicio' }">
        <v-toolbar-title>
          <h5 class="tituloEvento text-caption font-weight-black">
            AUFIELDS <span class="modificacionTituloEvento">2021</span>
          </h5>
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <!-- INICIAR SESION BTN -->

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            dark
            small
            class="ma-2"
            color="teal accent-3"
            :to="{ name: 'Login' }"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-account-check</v-icon>
          </v-btn>
        </template>
        <span>Iniciar Sesion</span>
      </v-tooltip>

      <!-- FINAL DE INICIAR SESION BTN -->

      <!-- CREAR USUARIO BTN -->

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            dark
            small
            class="ma-2"
            color="light-blue lighten-2"
            @click="dialog = true"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-account-reactivate</v-icon>
          </v-btn>
        </template>
        <span>Registrar</span>
      </v-tooltip>

      <!-- FINAL DE CREAR USUARIO BTN -->

      <!-- CARRITO BTN -->

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            dark
            small
            class="ma-2"
            color="light-green accent-3"
            v-bind="attrs"
            v-on="on"
            :to="{ name: 'Tickets' }"
          >
            <v-icon>mdi-ticket</v-icon>
          </v-btn>
        </template>
        <span>Comprar Ticket</span>
      </v-tooltip>

      <!-- FINAL DE CARRITO BTN -->

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
    </v-toolbar>

    <v-navigation-drawer
      app
      v-model="drawer"
      class="navigationDrawer purple darken-2"
    >
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon left class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- button -->
      <v-container>
        <v-row>
          <v-btn
            class="btnComentarios_test"
            dark
            color="pink accent-4 my-2"
            block
            :to="{ name: 'Contact Us' }"
            >Comentarios</v-btn
          >
        </v-row>
      </v-container>
    </v-navigation-drawer>

    <!-- DIALOG- MODAL -->

    <v-dialog v-model="dialog" persistent max-width="300">
      <v-card color="teal lighten-5" class="pa-5">
        <!-- FORMULARIO -->
        <div class="mb-5">
          <v-card-title
            class="tituloCrearUsuario yellow lighten-1 font-weight-bold"
          >
            Crear Usuario
          </v-card-title>
        </div>

        <v-text-field v-model="usuario.nombre" label="Nombre"></v-text-field>

        <v-text-field v-model="usuario.email" label="E-mail"></v-text-field>

        <v-text-field
          v-model="usuario.direccion"
          label="Dirección"
        ></v-text-field>

        <v-text-field
          v-model="usuario.password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          label="Introduce tu contraseña"
          @click:append="show1 = !show1"
        ></v-text-field>

        <v-alert outlined type="warning" prominent border="left" class="text-caption">
          Crea tu usuario para disfrutar de nuestras novedades.
        </v-alert>
        <!-- CREAR USUARIO BTN -->

        <v-btn
          dark
          color="pink lighten-3"
          block
          class="py-5 my-2"
          @click="crearUsuario"
        >
          <v-icon left>mdi-star</v-icon>
          Crear Cuenta
        </v-btn>

        <!-- FINAL DE CREAR USUARIO -->
        <!-- CREAR USUARIO BTN -->

        <v-btn
          id="closeLogin_test"
          dark
          color="red accent-2"
          block
          class="py-5 my-2"
          @click="dialog = false"
        >
          <v-icon left>mdi-close</v-icon>
          Cerrar
        </v-btn>

        <!-- FINAL DE CREAR USUARIO -->
      </v-card>
    </v-dialog>
  </nav>
</template>

<script>
import firebase from "firebase";
import { mapActions } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-heart", text: "Inicio", route: "/" },
        { icon: "mdi-ticket", text: "Line Up", route: "/lineup" },
        { icon: "mdi-music", text: "Tickets", route: "/tickets" },
        { icon: "mdi-airplane", text: "Travel", route: "/travel" },
        {
          icon: "mdi-alpha-b-circle",
          text: "Beneficios",
          route: "/beneficios",
        },
        { icon: "mdi-assistant", text: "Auf 2019", route: "/auf2019" },
        {
          icon: "mdi-contactless-payment",
          text: "Contact Us",
          route: "/contactus",
        },
        { icon: "mdi-comment-question", text: "Faqs", route: "/faqs" },
        { icon: "mdi-chat", text: "Chat", route: "/chat" },
      ],
      dialog: false,
      show1: false,

      // objeto usuario
      usuario: {
        nombre: "",
        email: "",
        direccion: "",
        password: "",
      },
    };
  }, //final de data
  methods: {
    crearUsuario() {
      this.dialog = false;
      this.$swal("Gracias!", "Te registraste!", "success");
      this.addUsuario(this.usuario);
    },
    ...mapActions(["addUsuario"]),
  },
};
</script>

<style lang="scss" scoped>
.linkRouterTitle {
  text-decoration: none;
}
.tituloCrearUsuario {
  color: #ab47bc;
}
.tituloEvento {
  text-decoration-line: none;
  color: #40c4ff;
}
.modificacionTituloEvento {
  color: #ffa726;
}
</style>

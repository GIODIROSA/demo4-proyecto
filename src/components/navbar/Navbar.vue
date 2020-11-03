<template>
  <nav>
    <v-toolbar dense elevation="1">
      <v-toolbar-title>
        <h5>Aufields</h5>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon color="indigo" disabled>
        <v-icon>mdi-star</v-icon>
      </v-btn>
      <v-btn icon color="green accent-3">
        <v-icon>mdi-music</v-icon>
      </v-btn>
      <v-btn icon :to="{ name: 'Tickets' }" color="amber darken-3">
        <v-icon>mdi-ticket</v-icon>
      </v-btn>

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
          <v-btn dark color="pink darken-1" block :to="{ name: 'Inicio' }"
            >Inicio</v-btn
          >
          <v-btn
            dark
            color="pink accent-4 my-2"
            block
            :to="{ name: 'Contact Us' }"
            >Comentarios</v-btn
          >
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-heart", text: "Inicio", route: "/" },
        { icon: "mdi-ticket", text: "Line Up", route: "/lineup" },
        { icon: "mdi-music", text: "Tickets", route: "/tickets" },
        { icon: "", text: "Travel", route: "/travel" },
        { icon: "", text: "Beneficios", route: "/beneficios" },
        { icon: "", text: "Auf 2019", route: "/auf2019" },
        { icon: "", text: "Contact Us", route: "/contactus" },
        { icon: "", text: "Faqs", route: "/faqs" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.titleAufields {
  color: #f50057;
}
</style>

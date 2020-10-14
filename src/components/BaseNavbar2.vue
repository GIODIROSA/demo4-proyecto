<template>
  <nav>
    <v-toolbar dense elevation="1" rounded>
      <v-toolbar-title>
         <h5 class="font-weight-light" >Aufields</h5> 
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon color="indigo" disabled>
        <v-icon>mdi-star</v-icon>
      </v-btn>
       <v-btn icon color="green accent-3" >
        <v-icon>mdi-music</v-icon>
      </v-btn>
       <v-btn icon color="amber darken-3">
        <v-icon>mdi-ticket</v-icon>
      </v-btn>
      
      
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="pink accent-3">
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
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-heart", text: "Home", route: "/" },
        { icon: "mdi-ticket", text: "About", route: "/about" },
        { icon: "mdi-music", text: "Grid", route: "/grid" },
        { icon: "", text: "Botones", route: "/botones" },
      ],
    };
  },
};
</script>

<style></style>

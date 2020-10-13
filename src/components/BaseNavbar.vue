<template>
  <div>
    <v-toolbar app>
       <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <!-- <v-app-bar-nav-icon @click="dawer = !dawer"> -->
     
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        Vuetify
      </v-toolbar-title>

<v-spacer></v-spacer>

      <v-btn class="success">
        Ingreso
      </v-btn>
       <v-btn class="error mx-2">
        Salir
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "BaseNavbar",
};
</script>

<style></style>

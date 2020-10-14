<template>
  <div>
    <v-toolbar>
<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
<v-toolbar-title>Aufields</v-toolbar-title>

 <v-spacer></v-spacer>
<v-btn class="success"> Ingreso </v-btn>
<v-btn class="error mx-2"> Salir </v-btn>

<v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
      class="mx-auto overflow-hidden"
    height="600"
    width="344"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>



</v-toolbar>
  </div>
</template>

<script>
export default {
  name: "BaseNavbar",
  data() {
    return {
      drawer: null,
      links: [
        {icon: "dashboard", text: "Home", route: "/"},
        {icon: "heart", text: "About", route: "/about"},
        {icon: "heart", text: "Grid", route: "/grid"},
        {icon: "heart", text: "Botones", route: "/botones"},
      ]
    };
  },
};
</script>

<style lang="scss" scoped>

</style



    

    // <v-spacer></v-spacer>
    //   <v-btn class="success"> Ingreso </v-btn>
    //   <v-btn class="error mx-2"> Salir </v-btn>
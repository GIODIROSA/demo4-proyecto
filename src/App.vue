<template>
  <v-app>
    <BaseNavbar2 />

    <v-main>
      <router-view />
    </v-main>
    <BaseFooter />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    ...mapActions(["getDataArtista"]),
  },
  created() {
    
    this.getDataArtista()
  },
};
</script>

<style lang="scss">

</style>

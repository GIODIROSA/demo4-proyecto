<template>
  <v-app>
    <BaseNavbar2 />

    <v-main>
      <router-view />
    </v-main>
    <div class="barraColorFooter">

    </div>
    <Footer />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Footer from "@/components/footer/Footer.vue";
export default {
  name: "App",
  components: {
    Footer,
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(["getDataArtista"]),
    ...mapActions("Areas", ["obtenerAreasConcierto"]),
  },
  created() {
    this.getDataArtista();
    this.obtenerAreasConcierto();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400&display=swap");

.barraColorFooter{
  background: #FF5252;
  height: 5px;
  width: 100%;
}
</style>

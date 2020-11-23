<template>
  <div>
    <div>
      <v-parallax dark :src="figuraUno">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-bold mb-4">
              {{ titulo }}
            </h1>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
    <section>
      <div class="d-flex justify-center mt-3">
        <v-btn v-for="(icon, index) in icons" :key="index" class="mx-4 " icon>
          <a class="linkRedes" :href="icon.link">
            <v-icon color="red accent-3" size="24px"
              >{{ icon.redes }}
            </v-icon></a
          >
        </v-btn>
      </div>
    </section>
    <CardTickets :ticketsDisponibles="ticketsDisponibles" />
  </div>
</template>

<script>
import CardTickets from "@/components/ticket/CardTickets.vue";

import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "Tickets",
  components: {
    CardTickets,
  },
  data() {
    return {
      icons: [
        { redes: "mdi-facebook", link: "https://www.facebook.com/" },
        { redes: "mdi-twitter", link: "https://twitter.com/?lang=en" },
        { redes: "mdi-linkedin", link: "https://www.linkedin.com/" },
        { redes: "mdi-instagram", link: "https://www.instagram.com/" },
      ],
      figuraUno:
        "https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/ambiente%2F16.png?alt=media&token=6a8e8e16-e56a-4bd8-b048-9dbd948e58a0",
      titulo: "TICKETS",
    };
  },

  computed: {
    ...mapState("Tickets", ["tickets"]),
    ...mapGetters("Tickets", ["ticketsOnStock"]),
    ticketsDisponibles() {
      return this.ticketsOnStock;
    },
  },
};
</script>

<style lang="scss" scoped>
.linkRedes {
  text-decoration: none;
}
</style>

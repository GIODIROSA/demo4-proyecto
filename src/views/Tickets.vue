<template>
  <div>
    <section>
      <div class="bannerTickets">
        <img class="imgbanner" src="../assets/img/tickets02.png" alt="" />
      </div>
      <div class="d-flex justify-center mt-3">
        <v-btn v-for="(icon, index) in icons" :key="index" class="mx-4 " icon>
          <a :href="icon.link">
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
.bannerTickets {
  background-image: url("../assets/img/bannertickets01.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgbanner {
  padding: 150px;
  width: 750px;
  height: 850px;
}
</style>

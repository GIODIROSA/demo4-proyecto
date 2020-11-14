<template>
  <div>
    <section>
      <div class="bannerTickets">
        <img class="imgbanner" src="../assets/img/tickets02.png" alt="" />
      </div>
    </section>
    <CardTickets :ticketsDisponibles="ticketsDisponibles" />
  </div>
</template>

<script>
import CardTickets from "@/components/ticket/CardTickets.vue";
import { mapGetters, mapState } from "vuex";
export default {
  name: "Tickets",
  components: {
    CardTickets,
  },
  data() {
    return {};
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

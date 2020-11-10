<template>
  <div>
    <Titulo />
    <p>parametro: {{ ticketElegido }}</p>
    <div v-for="(item, index) in obtenerTicket" :key="index">
      <p>
        {{ item.data.descripcion }}
      </p>
      <p>
        {{ item.data.tipo }}
      </p>
    </div>
    <pre>
        {{obtenerTicket}}
    </pre>
  </div>
</template>

<script>
import Titulo from "@/components/paramsPrueba/Titulo.vue";
import { mapGetters } from 'vuex';
export default {
  name: "Articulo",
  props: ['id'],
  data() {
    return {
      ticketElegido: this.$route.params.id,
    };
  },
  components: {
    Titulo,
  },
  computed: {
      ...mapGetters("Tickets",['busqueda_ticket']),

      obtenerTicket(){
         return this.busqueda_ticket(this.id)
      }
    //   this.$store.getters['a/doubleCount'];
    // obtenerTicket() {
    //   return this.$store.getters.busqueda_ticket(this.id);
      
    // },
  },
};
</script>

<style></style>

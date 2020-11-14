<template>
  <div>
   VERLO DESPUÉS LA MUESTRA QUE ARTISTA VA ESTAR CADA DIA
  </div>
</template>

<script>
export default {
  name: "LineaTiempo",
  props: ["ticketsDisponibles"],
  data() {
    return {
      show: false,
    };
  },
  computed: {
    obtenerArtistaFecha() {
      return this.ticketsDisponibles.filter(
        (ticket) => ticket.data.fecha === "06 de Noviembre"
      );
    },
  },
};
</script>

<style></style>

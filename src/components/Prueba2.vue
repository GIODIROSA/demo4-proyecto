<template>
  <div class="prueba">
    <div v-for="(artista, index) in artistas" :key="index">
      <img height="300" :src="artista.data.imagen" alt="imagen que no sale" />
    </div>
    <pre>
        {{$data}}
    </pre>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Prueba2",
  data() {
    return {};
  }, //final de data
  computed: {
    ...mapState(["artistas"]),
  },
};
</script>

<style lang="scss" scoped>
.prueba{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

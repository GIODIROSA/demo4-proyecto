<template>
  <div>
    <router-link :to="{ name: 'Contact Us' }">
      <img width="200" src="@/assets/img/casco01.png" alt="imagne de prueba" />
    </router-link>
    <p>{{ comentario.id }} - {{ comentario.nombre }}</p>
    <form
      @submit.prevent="editarComentario(comentario)"
      class="formulario ma-5"
    >
      <div>
        <v-text-field
          label="EDITAR"
          v-model="comentario.nombre"
          hide-details="auto"
        ></v-text-field>
      </div>
      <button type="submit">EDITAR</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Editar",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.obtenerComentario(this.id);
  },
  methods: {
    ...mapActions("Comentarios", ["obtenerComentario", "editarComentario"]),
  },
  computed: {
    ...mapState("Comentarios", ["comentario"]),
  },
};
</script>

<style lang="scss" scoped></style>

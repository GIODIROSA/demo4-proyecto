<template>
  <div>
    <h1>Agregar Comentario</h1>
    <form @submit.prevent="agregarComentario(nombre)">
      <div>
        <v-text-field
          type="text"
          v-model="nombre"
          label="Agregar comentario"
          hide-details="auto"
        ></v-text-field>
      </div>
      <button type="submit">AGREGAR</button>
    </form>

    <pre>
        {{ $data }}
    </pre>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Agregar",
  data() {
    return {
      nombre: "",
    };
  },
  methods: {
    ...mapActions("Comentarios", ["agregarComentario"]),
  },
};
</script>

<style></style>

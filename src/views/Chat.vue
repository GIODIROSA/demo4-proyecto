<template>
  <div>
    <v-container>
      <v-row>
        <v-card>
          <v-card-text>
            <h3>Bienvenido: {{ usuario.nombre }}</h3>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Chat",
  computed: {
    ...mapState("Chat", ["usuario"]),
  },
};
</script>

<style></style>

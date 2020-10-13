<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn>Texto</v-btn>
        <v-btn class="pink accent-3 mx-4 white--text">Texto</v-btn>
        <v-btn dark class="blue">Texto</v-btn>
        <v-btn class="mx-4" color="secondary" flat>Sin fondo</v-btn>
        <v-btn
          class="mx-4"
          color="warning"
          depressed
          elevation=""
          large
          x-large
          x-small
          >Largo</v-btn
        >
        <v-btn class="mx-4" color="warning" depressed elevation="" small x-small
          >Largo</v-btn
        >
        <v-btn
          class="mx-4"
          color="warning"
          depressed
          elevation=""
          small
          x-small
          :disabled="true"
          >Largo</v-btn
        >
        <v-btn icon color="pink">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      //recordar esto para habilitar el btn
      disabled: false,
    };
  },
};
</script>

<style></style>

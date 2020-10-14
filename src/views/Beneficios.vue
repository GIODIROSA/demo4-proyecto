<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn>Texto</v-btn>
        <v-btn class="pink accent-3 mx-4 white--text">Texto</v-btn>
        <v-btn dark class="blue">Texto</v-btn>
        <v-btn class="mx-4" color="secondary" text>Sin fondo</v-btn>
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
        <v-btn class="mx-2" fab dark small color="info">
          <v-icon dark>
            mdi-heart
          </v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark large color="accent">
          <v-icon dark>
            mdi-heart
          </v-icon>
        </v-btn>
        <v-btn color="success">
          Texto
          <v-icon>
            mdi-forum
          </v-icon>
        </v-btn>
        <v-btn color="success mx-4">
          Texto
          <v-icon class="ml-2">
            mdi-forum
          </v-icon>
        </v-btn>
        <v-btn color="cyan lighten-3 mx-4">
          Texto
          <v-icon right>
            mdi-forum
          </v-icon>
        </v-btn>

        <v-btn color="cyan lighten-3 mx-4">
          <v-icon left>
            mdi-forum
          </v-icon>
          Texto
        </v-btn>
        <v-btn color="cyan lighten-3 mx-4" outlined>
          <v-icon left>
            mdi-forum
          </v-icon>
          Texto
        </v-btn>
        <v-btn dark color="red accent-3 mx-4 my-4" block>
          Buy aufield tickets
          <v-icon right>
            mdi-heart
          </v-icon>
        </v-btn>
        <v-btn dark color="orange lighten-1 mx-4 my-4" block rounded>
          Buy aufield tickets
          <v-icon right>
            mdi-heart
          </v-icon>
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

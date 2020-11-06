<template>
  <v-container>
    <!-- <input type="checkbox" v-model="filter" /> -->
    <v-btn dark color="orange" block @click="modificar">
      <v-btn icon color="pink">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      ACTIVA AUF2019
    </v-btn>
    <h1 class="todoColor py-5" :class="{ imgColorGris: !filter }">
      {{ mensaje }}
    </h1>
    <v-row>
      <v-col 
        v-for="(imagen, index) in imagenes"
        :key="index"
        class="d-flex child-flex todoColor"
        cols="6" md="4" lg="4"
        :class="{ imgColorGris: !filter }"
      >
        <v-img
          :src="imagen"
          aspect-ratio="1"
          class="imgprueba grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
    <pre>
        {{ $data }}
    </pre>
  </v-container>
</template>

<script>
import firebase from "firebase";
export default {
  name: "GaleriaImagen",
  props: ["imagenes"],
  data() {
    return {
      filter: false,
      mensajes: {
        in: "2019 fue un gran año y tu lo viviste al máximo",
        out: "Si pinchas el botón, podrás revivir el AUF2019",
      },
    };
  },
  methods: {
    modificar() {
      this.filter = true;
    },
  },
  computed: {
    mensaje() {
      return this.filter ? this.mensajes.in : this.mensajes.out;
    },
  },
};
</script>

<style lang="scss" scoped>
.todoColor {
  color: violet;
  text-align: center;
  font-size: 20px;
  font-weight: 300;
}
.imgColorGris {
  color: gray;
  filter: grayscale(100%);
}
</style>

<template>
  <div>
    <!-- BUSCAR LA MANERA DE OPTIMIZAR ESTA PARTE -->
    <!-- intentar en el hook mounted en la app pasar como props string la img -->

    <v-container>
      <v-row>
        <!-- cards artista UNO -->
        <v-col cols="12" md="3" sm="6">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="src" height="400px"></v-img>

            <v-card-title>
              {{ title }}
            </v-card-title>

            <v-card-subtitle>
              {{ subtitle }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text :to="{ name: 'LineUp' }">
                {{ accion }}
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  <!-- {{ text }} -->
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "BaseCardsdj2",
  props: {
    src: String,
    title: String,
    subtitle: String,
    accion: String,
    text: String,
  },
  data() {
    return {
      show: false,
      // amelie: false,
      // charlotte: false,
      // boris: false,
      // martin: false,
    };
  }, //final de data
};
</script>

<style lang="scss" scoped>

</style>

<template>
  <div>
    <div class="encabezadoPostArtista">
      <h1 class="tituloPostArtistas text-center">
        ARTISTAS INVITADOS
        <span class="edicionConcierto">2021</span>
      </h1>
      <h5 class="subtituloPostArtista">
        CONCIERTO DE MÚSICA ELECTRÓNICA MÁS GRANDE DE SUR AMÉRICA
      </h5>
    </div>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
          lg="3"
          v-for="(artista, index) in artistas"
          :key="index"
        >
          <v-card class="cardDj_test mx-auto" max-width="400" :to="{ name: 'LineUp' }">
            <v-img
              class="white--text align-end"
              height="600px"
              :src="artista.data.imagen"
            >
              <v-card-title class="NombreArtista">{{
                artista.data.name
              }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "PostArtistas",
  props: ["artistas"],

  methods: {
    e1() {},
  },
};
</script>

<style lang="scss" scoped>
.encabezadoPostArtista {
  padding: 50px 0px;
}
.edicionConcierto {
  color: #00e5ff;
  font-weight: 900;
}
.NombreArtista {
  font-size: 20px;
  display: block;
  margin: auto;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
.tituloPostArtistas {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #ffab40;
}
.subtituloPostArtista {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  color: #ffab40;
  text-align: center;
}
</style>

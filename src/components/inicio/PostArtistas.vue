<template>
  <div>
    <div class="encabezadoPostArtista">
      <h1 class="tituloPostArtistas text-center">
        ARTISTAS INVITADOS
        <span class="edicionConcierto">2021</span>
      </h1>
      <h5 class="subtitutloPostArtista">
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
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="300px"
              :src="artista.data.imagen"
            >
              <v-card-title>{{ artista.data.name }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
             <span  class="categoriaArtista">País: </span> {{ artista.data.country }}
            </v-card-subtitle>

            <v-card-subtitle class="pb-0 text-sm-body-2">
              <span class="categoriaArtista"> Website:</span> <br />
              {{ artista.data.website }}
            </v-card-subtitle>

            <v-card-subtitle class="pb-0">
              <span class="categoriaArtista">Genero:</span> <br />
              {{ artista.data.genres }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn icon color="pink">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-card-actions>
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
.tituloPostArtistas {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #ffab40;
}
.subtitutloPostArtista {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  color: #ffab40;
  text-align: center;
}
.categoriaArtista{
  font-weight: 600;
  color: #C51162;


}
</style>

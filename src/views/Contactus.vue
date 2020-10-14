<template>
  <v-container>
    <!-- UNO -->
    <v-row wrap>
      <v-col cols="12" md="6">
        <!-- UNO TARJETA -->
        <v-card
          class="mb-3"
          v-for="(comentario, index) in comentarios"
          :key="index"
        >
          <v-card-text>
            <v-chip class="mb-2" color="pink" label text-color="white">
              <v-icon left>
                mdi-label
              </v-icon>
              {{ comentario.titulo }}
            </v-chip>
            <p>
              {{ comentario.descripcion }}
            </p>
            <v-btn color="warning">
              Editar
            </v-btn>
            <v-btn color="error" class="mx-4">
              Eliminar
            </v-btn>
          </v-card-text>
        </v-card>
        <!-- DOS TARJETA -->
        <!-- <v-card class="mb-3">
          <v-card-text>
            <v-chip class="mb-2" color="pink" label text-color="white">
              <v-icon left>
                mdi-label
              </v-icon>
              AufTalk #2
            </v-chip>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              hic voluptatibus pariatur placeat labore, et officia commodi animi
              porro. Quam vitae numquam maxime labore! Neque modi obcaecati
              nesciunt iure, quia, accusantium ipsa ratione atque, aspernatur ut
              voluptates vel. Labore sunt rerum sint, cumque et quasi adipisci
              nemo non repellat pariatur.
            </p>
            <v-btn color="warning">
              Editar
            </v-btn>
            <v-btn color="error" class="mx-4">
              Eliminar
            </v-btn>
          </v-card-text>
        </v-card> -->
      </v-col>
      <!-- DOS -->
      <v-col cols="12" md="6">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="agregarComentario">
            <v-text-field color="teal lighten-1" label="AufTalk" v-model="titulo">
            </v-text-field>
            <v-textarea color="deep-purple lighten-2" label="Comentario AufTalk" v-model="descripcion"></v-textarea>
            <v-btn dark block color="lime accent-4" type="submit">Agregar</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Contactous",
  data() {
    return {
      comentarios: [
        {
          id: 1,
          titulo: "AufTalk #1",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
        },
        {
          id: 1,
          titulo: "AufTalk #2",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
        },
      ],
      titulo: "",
      descripcion: "",
    };
  },//final de data
  methods: {
    agregarComentario() {
      console.log(this.titulo, this.descripcion);
      
    }
  },
};
</script>

<style></style>

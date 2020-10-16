<template>
  <div class="cardDj">
    <!-- BUSCAR LA MANERA DE OPTIMIZAR ESTA PARTE -->
    <!-- intentar en el hook mounted en la app pasar como props string la img -->

    <v-container>
      <v-row>
        <!-- cards artista UNO -->
        <v-col cols="12" md="3" sm="6">
          <v-card
            v-for="(card, index) in cards"
            :key="index"
            class="mx-auto"
            max-width="344"
          >
            <v-img v-for="(imagen, index) in imagenes" :key="index" :src=imagen.imagen  height="400px"></v-img>

            <v-card-title>
              {{ card.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ card.subtitle }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text :to="{ name: 'LineUp' }">
                {{ card.actions }}
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="getInfo">
                <v-icon>{{
                  getInfo ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="getInfo">
                <v-divider></v-divider>

                <v-card-text>
                  {{ card.text }}
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
  name: "BaseCardsdj",
  data() {
    return {
      // amelie: false,
      charlotte: false,
      boris: false,
      martin: false,
      pictures: [],
      imagenes: [],
      cards: [
        {
          id: Date.now(),
          img: "../assets/img/amelielens01.png",
          title: "Amelie Lens",
          subtitle: "Belgica",
          actions: "Biografia",
          estado: "false",
          text: "loquesealoquesealoquesealoquesealoquesealoquesea",
        },
        {
          id: Date.now(),
          img: "../assets/img/borisbrejcha01.png",
          title: "Boris Brejcha",
          subtitle: "Alemania",
          actions: "Biografia",
          estado: "false",
          text: "loquesealoquesealoquesealoquesealoquesealoquesea",
        },
        {
          id: Date.now(),
          img: "../assets/img/charlottedewitte01.png",
          title: "Charlotte De Witte",
          subtitle: "Belgica",
          actions: "Biografia",
          estado: "false",
          text: "loquesealoquesealoquesealoquesealoquesealoquesea",
        },
        {
          id: Date.now(),
          img: "../assets/img/martingarrix01.png",
          title: "Martin Garrix",
          subtitle: "Holanda",
          actions: "Biografia",
          estado: "false",
          text: "loquesealoquesealoquesealoquesealoquesealoquesea",
        },
      ],
    };
  }, //final de data
  computed: {
    getImg() {
      this.cards.forEach((e) => this.pictures.push(e.img));
    },
     getInfo() {
      return this.cards.estado = !this.cards.estado
    },
    getPicture(){
    this.pictures.forEach(element => {
     let prueba= element;
     return this.imagenes.push(prueba);
    });
    
    }
  },
};
</script>

<style lang="scss" scoped>
.cardDj {
  display: flex;
  justify-content: space-around;
  align-content: space-around;
}
</style>

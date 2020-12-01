<template>
  <div>
    <!-- COMPONENTE PARALLAX DE LA IMAGEN DE FAQS -->
    <ImagenFaqs />
    <v-container>

      <!-- SELECT DE FAQS -->
      <div class="lime accent-4">
        <h5 class="text-caption text-center">
          Selecciona la preguntas frecuente que te acontece
        </h5>
      </div>

      <v-row class="selectPreguntas">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            @change="setTopTick"
            v-model="question"
            :items="interrogante"
            label="TOPTICK"
            dense
            outlined
            color="lime darken-3"
          ></v-select>
        </v-col>
      </v-row>
      <!-- FINAL DE SELECT DE FAQS -->

      <!-- RESPUESTAS A LAS PREGUNTAS FRECUENTES-->
      <v-card class="lime">
        <div
          class="pa-5"
          v-for="(ques, index) in questionDisponible"
          :key="index"
        >
          <v-card-text class="text-justify font-weight-light my-10">
            {{ ques.data.respuesta }}
          </v-card-text>
        </div>
      </v-card>
    </v-container>
    <!-- LINK DE REDES -->
    <div class="d-flex justify-center mt-3">
      <v-btn v-for="(icon, index) in icons" :key="index" class="mx-4 " icon>
        <a class="redesLink" :href="icon.link">
          <v-icon color="lime darken-4" size="24px"
            >{{ icon.redes }}
          </v-icon></a
        >
      </v-btn>
    </div>
    <!-- FINAL DE LINK DE REDES -->
  </div>
</template>

<script>
import ImagenFaqs from "@/components/faqs/ImagenFaqs.vue";
import { mapGetters, mapState } from "vuex";
export default {
  name: "Faqs",
  components: {
    ImagenFaqs,
  },
  data() {
    return {
      question: null,
      interrogante: [],
      icons: [
        { redes: "mdi-facebook", link: "https://www.facebook.com/" },
        { redes: "mdi-twitter", link: "https://twitter.com/?lang=en" },
        { redes: "mdi-linkedin", link: "https://www.linkedin.com/" },
        { redes: "mdi-instagram", link: "https://www.instagram.com/" },
      ],
    };
  }, //final de data
  created() {
    this.setTopTick();
  },
  methods: {
    setTopTick() {
      this.topTick.forEach((e) => {
        this.interrogante.push(e.data.pregunta);
      });
    },
  },
  computed: {
    ...mapState("Faqs", ["topTick"]),
    ...mapGetters("Faqs", ["questionAvailable"]),

    questionDisponible() {
      return this.questionAvailable(this.question);
    },
  },
};
</script>

<style scoped>
div > * {
  font-family: "Montserrat", sans-serif;
}
.selectPreguntas {
  display: flex;
  justify-content: center;
  align-content: center;
}
.titleFaqs {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
}
.redesLink {
  text-decoration: none;
}
</style>

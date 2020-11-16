<template>
  <div>
    <ImagenFaqs />
    <!-- select vuetify -->
    <v-container>
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
          ></v-select>
        </v-col>
      </v-row>
      <!-- RESPUESTAS -->
      <div
        class="lime pa-2"
        v-for="(ques, index) in questionDisponible"
        :key="index"
      >
        <p class="text-justify font-weight-light my-10">
          {{ ques.data.respuesta }}
        </p>
      </div>
    </v-container>
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
</style>

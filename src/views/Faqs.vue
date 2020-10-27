<template>
  <div>
    
    <h1 class="titleFaqs">Seleccione una pregunta frecuente</h1>
    <!-- select vuetify -->
    <v-container fluid>
      <v-row align="center">
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
    </v-container>
    <div v-for="(ques, index) in questionAvailable" :key="index">
      <p>{{ ques.respuesta }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Faqs",
  data() {
    return {
      question: null,
      interrogante: [],
    };
  }, //final de data
  created () {
    this.setTopTick()
  },
  methods: {
    setTopTick() {
      this.topTick.forEach((e) => {
        this.interrogante.push(e.pregunta);
      });
    },
  },
  computed: {
    ...mapState(["topTick"]),

    questionAvailable() {
      return this.$store.getters.questionAvailable(this.question);
    },
  },
};
</script>

<style scoped>
.titleFaqs {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
}
</style>

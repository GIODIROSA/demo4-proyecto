<template>
  <div>
    <h1>Seleccione una pregunta frecuente</h1>
    <select class="selectQuestions">
      <option disabled selected>Seleccione Top Tick</option>
      <option
        v-for="(ques, clave) in topTick"
        :key="clave"
        :value="ques.pregunta"
        >{{ ques.pregunta }}</option
      >
    </select>

    <!-- select vuetify -->

    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            v-model="question"
            :items="interrogante"
            label="TOPTICK"
            dense
            outlined
          ></v-select>
          <div v-for="(ques, index) in questionAvailable" :key="index">
            <p>{{ques.respuesta}}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Faqs",
  data() {
    return {
      question: "",
      interrogante: [],
    };
  }, //final de data
  computed: {
    ...mapState(["topTick"]),
    setTopTick() {
      this.topTick.forEach((e) => {
        this.interrogante.push(e.pregunta);
      });
    },
    questionAvailable() {
      return this.$store.getters.questionAvailable(this.question);
    },
  },
};
</script>

<style></style>

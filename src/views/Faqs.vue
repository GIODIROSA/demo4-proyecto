<template>
  <div>
    <select v-model="question" class="selectQuestions">
      <option disabled selected>Seleccione Top Tick</option>
      <option
        v-for="(ques, clave) in questionAvailable"
        :key="clave"
        :value="ques.pregunta"
        >{{ ques.pregunta }}</option
      >
    </select>

  </div>
</template>

<script>
// import {mapState} from 'vuex'
export default {
  name: "Faqs",
  data() {
    return {
      question: "",
    };
  }, //final de data
  computed: {
    // ...mapState(['topTick']),
    questionAvailable() {
      return this.$store.getters.questionAvailable(this.question);
    },
  },
};
</script>

<style></style>

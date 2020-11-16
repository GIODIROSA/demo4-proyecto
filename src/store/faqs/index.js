import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    topTick: [],
  },
  getters: {
    questionAvailable: (state) => (question) => {
        return state.topTick.filter((q) => q.data.pregunta.includes(question));
      },
  },
  mutations: {
    OBTENER_PREGUNTAS(state, payload) {
      state.topTick = payload;
    },
  },
  actions: {
    obtenerFaqs({ commit }) {
      try {
        firebase
          .firestore()
          .collection("faqs")
          .onSnapshot((snapshot) => {
            let preguntas = [];
            snapshot.forEach((doc) => {
              preguntas.push({
                data: doc.data(),
              });
            });
            commit("OBTENER_PREGUNTAS", preguntas);
          });
      } catch (error) {
        console.log("El error esta en: ", error);
      }
    },
  },
};

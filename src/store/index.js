import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    artistas: [],
  },
  mutations: {
    SET_ARTISTAS(state, artistas) {
      state.artistas = artistas;
    },
  },
  actions: {
    getDataArtista({ commit }) {
      firebase
        .firestore()
        .collection("artists")
        .onSnapshot((snapshot) => {
          let artistas = [];
          snapshot.forEach((doc) => {
            artistas.push({
              data: doc.data(),
            });
          });
          commit("SET_ARTISTAS", artistas);
        });
    },
  },
  modules: {},
});

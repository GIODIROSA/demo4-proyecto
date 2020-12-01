import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    areas: [],
  },
  getters: {},
  mutations: {
    OBTENER_AREA(state, payload) {
      state.areas = payload;
    },
  },
  actions: {
    async obtenerAreasConcierto({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("areas")
          .onSnapshot((snapshot) => {
            let areas = [];
            snapshot.forEach((doc) => {
              areas.push({
                data: doc.data(),
              });
            });
            commit("OBTENER_AREA", areas);
          });
      } catch (error) {
        console.log("Hay un error en area:", error);
      }
    },
  },
};

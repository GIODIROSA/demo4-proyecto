import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    contenidos: [],
  },
  getters: {},
  mutations: {
    OBTENER_CONTENIDO(state, payload) {
      // console.log(payload);
      state.contenidos = payload;
    },
  },
  actions: {
    async obtenerData({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("contenido")
          .onSnapshot((snapshot) => {
            let contenido = [];
            snapshot.forEach((doc) => {
              contenido.push({
                data: doc.data(),
              });
            });
            commit("OBTENER_CONTENIDO", contenido);
          });
      } catch (error) {
        console.log("el error en el contenido es:", error);
      }
    },
  },
};

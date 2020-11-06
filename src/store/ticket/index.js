import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    tickets: [],
  },
  getters: {},
  mutations: {
    OBTENER_TICKETS(state, payload) {
      state.tickets = payload;
    },
  },
  actions: {
    async obtenerDataTickets({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("tickets")
          .onSnapshot((snapshot) => {
            let tickets = [];
            snapshot.forEach((doc) => {
              tickets.push({
                data: doc.data(),
              });
            });
            commit("OBTENER_TICKETS", tickets);
          });
      } catch (error) {
        console.log("el error en el contenido es:", error);
      }
    },
  },
};

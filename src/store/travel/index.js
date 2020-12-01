import firebase from "firebase";

export default {
  namespaced: true,
  state: {
      travels: []
  },
  getters: {},
  mutations: {
    OBTENER_TRAVEL(state, payload){
        state.travels = payload
    }
   
  },
  actions: {
    async obtenerTravel({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("travel")
          .onSnapshot((snapshot) => {
            let travel = [];
            snapshot.forEach((doc) => {
              travel.push({
                id: doc.id,
                data: doc.data(),
              });
            });
            commit("OBTENER_TRAVEL", travel);
          });
      } catch (error) {
        console.log("El error en el contenido es:", error);
      }
    },
  },
};

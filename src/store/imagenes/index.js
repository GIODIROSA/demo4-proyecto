import firebase from "firebase";

export default {
  namespaced: true,
  state: {
      imagenes: []
  },
  getters: {},
  mutations: {
    OBTENER_IMAGENES(state, payload){
        state.imagenes = payload;
    }
  },
  actions: {
    obtenerImagenes({ commit }) {
      let storageRef = firebase.storage().ref("concierto");
      storageRef.listAll().then((result) => {
          let imagenes= []
        result.items.forEach((imageRef) => {
          imageRef.getDownloadURL().then((url) => {
            imagenes.push(url)
          });
        });
        commit('OBTENER_IMAGENES', imagenes)
      });
    },
  },
};

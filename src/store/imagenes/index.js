import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    imagenes: [],
    sliderImagen: [],
  },
  getters: {},
  mutations: {
    OBTENER_IMAGENES(state, payload) {
      state.imagenes = payload;
    },
    IMAGEN_SLIDER(state, payload) {
      state.sliderImagen = payload;
    },
  },
  actions: {
    // CONCIERTO

    obtenerImagenes({ commit }) {
      let storageRef = firebase.storage().ref("concierto");
      storageRef.listAll().then((result) => {
        let imagenes = [];
        result.items.forEach((imageRef) => {
          imageRef.getDownloadURL().then((url) => {
            imagenes.push(url);
          });
        });
        commit("OBTENER_IMAGENES", imagenes);
      });
    },

    // SILDER

    obtenerImagenesSlider({ commit }) {
      let storageRef = firebase.storage().ref("slider");
      storageRef.listAll().then((result) => {
        let slider = [];
        result.items.forEach((imageSlider) => {
          imageSlider.getDownloadURL().then((url) => {
            slider.push(url);
          });
        });
        commit("IMAGEN_SLIDER", slider);
      });
    },
  },
};

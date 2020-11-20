import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    imagenes: [],
    sliderImagen: [],
    ambiente: [],
  },
  getters: {},
  mutations: {
    OBTENER_IMAGENES(state, payload) {
      state.imagenes = payload;
    },
    IMAGEN_SLIDER(state, payload) {
      state.sliderImagen = payload;
    },
    IMAGEN_AMBIENTE(state, payload) {
      state.ambiente = payload;
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

    // SLIDER

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

    // AMBIENTE

    obtenerImagenesAmbiente({ commit }) {
      let storageRef = firebase.storage().ref("ambiente");
      storageRef.listAll().then((result) => {
        let ambiente = [];
        result.items.forEach((imageAmbiente) => {
          imageAmbiente.getDownloadURL().then((url) => {
            ambiente.push(url);
          });
        });
        commit("IMAGEN_AMBIENTE", ambiente);
      });
    },
  },
};

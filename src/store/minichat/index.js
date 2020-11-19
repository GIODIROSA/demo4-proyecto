import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    usuario: {},
  },
  getters: {},
  mutations: {
    NUEVO_USUARIO(state, payload) {
      state.usuario = payload;
    },
  },
  actions: {
    // obtenerLogin({ commit }, user) {
    //   const usuario = {
    //     nombre: user.displayName,
    //     email: user.email,
    //     uid: user.uid,
    //     foto: user.photoURL,
    //   };
    //   // commit("NUEVO_USUARIO", usuario);
    // },
  },
};

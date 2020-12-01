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
  actions: {},
};

import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import firebase from "firebase";

// modules
import Areas from "../store/areas";
import Contenidos from "../store/contenido";
import Tickets from "../store/ticket";
import Imagenes from "../store/imagenes";
import Travel from "../store/travel";
import Carrito from "../store/carrito";
import Comentarios from "../store/comentarios";
import Faqs from "../store/faqs";
import Chat from "../store/minichat";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    artistas: [],
  },
  getters: {},
  mutations: {
    SET_ARTISTAS(state, artistas) {
      state.artistas = artistas;
    },
  },
  actions: {
    // CREAR USUARIO---COMPONENTE NAVBAR
    addUsuario({ commit }, usuario) {
      try {
        firebase
          .auth()
          .createUserWithEmailAndPassword(usuario.email, usuario.password)
          .then(() => {
            const user = usuario;
            delete user.password;
            firebase
              .firestore()
              .collection("usuarioCreado")
              .add(usuario);
          });
      } catch (error) {
        console.log("Tienes un error en Usuario: ", error);
      }
    },

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
  modules: {
    Areas,
    Contenidos,
    Tickets,
    Imagenes,
    Travel,
    Carrito,
    Comentarios,
    Chat,
    Faqs,
  },

  plugins: [createPersistedState()],
});

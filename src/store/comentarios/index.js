import firebase from "firebase";
import router from "../../router";

export default {
  namespaced: true,
  state: {
    comentarios: [],
    consultas: [],
    comentario: { nombre: "", id: "" },
    add: false,
  },
  getters: {},
  mutations: {
    OBTENER_COMENTARIOS(state, payload) {
      state.comentarios = payload;
    },
    OBTENER_IDCOMENTARIO(state, payload) {
      state.comentario = payload;
    },
    OBTENER_CONSULTAS(state, payload) {
      state.consultas = payload;
    },
    ELIMINAR_COMENTARIO(state, payload) {
      state.comentarios = state.comentarios.filter(
        (item) => item.id !== payload
      );
    },
    MOSTRAR_ADD(state) {
      state.add = !state.add;
    },
  },
  actions: {
    async obtenerConsultaGenerales({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("consultas")
          .onSnapshot((snapshot) => {
            let consulta = [];
            snapshot.forEach((doc) => {
              consulta.push({
                id: doc.id,
                data: doc.data(),
              });
            });
            commit("OBTENER_CONSULTAS", consulta);
          });
      } catch (error) {
        console.log("Tienes un error en consultas : ", error);
      }
    },
    // READ DATA FIREBASE
    async obtenerDataComentarios({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("comentarios")
          .onSnapshot((snapshot) => {
            let comentario = [];
            snapshot.forEach((doc) => {
              comentario.push({
                id: doc.id,
                data: doc.data(),
              });
            });
            commit("OBTENER_COMENTARIOS", comentario);
          });
      } catch (error) {
        console.log("Tienes un error  en comentarios: ", error);
      }
    },
    // proviene de EDITAR
    obtenerComentario({ commit }, idComentario) {
      firebase
        .firestore()
        .collection("comentarios")
        .doc(idComentario)
        .get()
        .then((doc) => {
          let IdComentario = doc.data();
          IdComentario.id = doc.id;
          commit("OBTENER_IDCOMENTARIO", IdComentario);
        });
    },

    editarComentario({ commit }, comentario) {
      firebase
        .firestore()
        .collection("comentarios")
        .doc(comentario.id)
        .update({
          nombre: comentario.nombre,
        })
        .then(() => {
          router.push("/contactus");
        });
    },

    agregarComentario({ commit }, nombreComentario) {
      firebase
        .firestore()
        .collection("comentarios")
        .add({
          nombre: nombreComentario,
        })
        .then((doc) => {
          router.push("/contactus");
        });
    },

    eliminarComentario({ commit }, id) {
      firebase
        .firestore()
        .collection("comentarios")
        .doc(id)
        .delete()
        .then(() => {
          commit("ELIMINAR_COMENTARIO", id);
        });
    },
  },
};

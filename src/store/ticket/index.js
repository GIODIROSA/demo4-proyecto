import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    tickets: [],
    carritoStock: [],
    normativasConcierto: [],
  },
  getters: {
    ticketsOnStock(state) {
      return state.tickets.filter((ticket) => {
        return ticket.data.stock > 0;
      });
    },
    // El carrito busca y consume la data que fue transformada por un getters que evalua si hay o no stock de ticket
    busqueda_ticket: (state, getters) => (idTicket) => {
      return getters.ticketsOnStock.find((t) => t.id === idTicket);
    },
    cantidadEntrada: (state) => (numeroEntrada) => {
      return console.log(numeroEntrada);
    },
  },
  mutations: {
    OBTENER_TICKETS(state, payload) {
      state.tickets = payload;
    },
    AÑADIR_CARRITO(state, payload) {
      console.log(payload);
    },
    OBTENER_NORMATIVA(state, payload) {
      state.normativasConcierto = payload;
    },
  },
  actions: {
    //(t) es el payload de ticketcomprado en cardCarrito
    //idTicketSeleccionado
    comprarTicket({ state }, t) {
      firebase
        .firestore()
        .collection("tickets")
        .doc(t.id)
        .update({ stock: t.data.stock - t.cantidad });

      // comprarPolera({ state }, p) {
      //   console.log(p)
      //   firebase
      //     .firestore()
      //     .collection("poleras")
      //     .doc(p.id)
      //     .update({ stock: p.data.stock - p.cant });
      // },
    },

    async obtenerDataTickets({ commit }) {
      try {
        await firebase
          .firestore()
          .collection("tickets")
          .onSnapshot((snapshot) => {
            let tickets = [];
            snapshot.forEach((doc) => {
              tickets.push({
                id: doc.id,
                data: doc.data(),
              });
            });
            commit("OBTENER_TICKETS", tickets);
          });
      } catch (error) {
        console.log("el error en el contenido es:", error);
      }
    },

    async obtenerDataNormativas({ commit }) {
      try {
        firebase
          .firestore()
          .collection("normativas")
          .onSnapshot((snapshot) => {
            let normativa = [];
            snapshot.forEach((doc) => {
              normativa.push({
                data: doc.data(),
              });
            });
            commit("OBTENER_NORMATIVA", normativa);
          });
      } catch (error) {
        console.log("el error de normativa es: ", error);
      }
    },
  },
};

import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    tickets: [],
    carritoStock: [],
    normativas:
      "Aufields es un evento para mayores de 18 años y operará el esquema Challenge 21 con pulseras entregadas a los clientes una vez que hayan proporcionado una prueba satisfactoria de edad.",
    identificacion:
      "Licencia de conducir: una licencia de conducir completa o provisiona que esté dentro de la fecha Pasaporte: un pasaporte que está dentro de la fecha Cualquier tarjeta de identificación que lleve el logotipo de PASS: más información en el sitio web del programa de pases Una tarjeta de identidad nacional emitida por país de origen (que no sea CHILE) Tarjeta de identificación con fotografía de las Fuerzas Armadas ** Tenga en cuenta que los boletos se publicarán durante julio y agosto y podrían llegar hasta una semana antes del evento. Si tiene alguna inquietud con respecto a sus boletos, comuníquese con el agente de boletos donde compró su boleto. **",
    entrada:
      "Para evitar comprar un boleto falso o cancelado, No compre a un agente de venta de entradas no oficial, No compre en sitios de subastas en Internet, No compre de otra persona o promocione, ya sea por adelantado en su ciudad natal o fuera del evento.",
  },
  getters: {
    ticketsOnStock(state) {
      return state.tickets.filter((ticket) => {
        return ticket.data.stock > 0;
      });
    },
    // El carrito busca y consume la data que fue transformada por un getters que evalua si hay o no stock de ticket
    busqueda_ticket: (state, getters) => (idTicket) => {
      return getters.ticketsOnStock.filter((t) => t.id === idTicket);
    },
  },
  mutations: {
    OBTENER_TICKETS(state, payload) {
      state.tickets = payload;
    },
    AÑADIR_CARRITO(state, ticket) {
      console.log(ticket);
      state.carritoStock = ticket;
    },
  },
  actions: {
    addTicketCarrito({ commit }, ticket) {
      commit("AÑADIR_CARRITO", ticket);
      // ¿Hay inventario de ese producto?, si ya fue seleccionado porque hay.
      // ¿Existe ya en el carrito?, si ya fue seleccionado dicho ticket
      // ¿si es así, añadir uno más a la compra
      // si no es así, añadir el producto al carrito
      // Independientemente, restar el inventario de ese producto
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
  },
};

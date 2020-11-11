import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

// modules
import Areas from "../store/areas";
import Contenidos from "../store/contenido";
import Tickets from "../store/ticket";
import Imagenes from "../store/imagenes";
import Travel from "../store/travel";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    artistas: [],
    topTick: [
      {
        id: 1,
        pregunta: "¿Cuándo salen los pagos de mi depósito?",
        respuesta:
          "obtener un desglose completo de los pagos de depósitos y las fechas de pago",
      },
      {
        id: 2,
        pregunta: "¿Cuándo recibiré mi boleto?",
        respuesta:
          "Los boletos se publicarán a partir de junio de 2021 y podrían llegar hasta una semana antes del evento. Si tiene alguna inquietud con respecto a sus boletos, comuníquese con el agente de boletos al que compró su boleto.",
      },
      {
        id: 3,
        pregunta: "¿Dónde puedo cargar mi teléfono?",
        respuesta:
          "WOM proporcionará nuevamente cargadores portátiles con múltiples ubicaciones de intercambio en Campsite Village, Gold Campsite y arena. Por tan solo $ 1.000 puede reservar con anticipación una pulsera de fin de semana que le permite un cargador completo por día.",
      },
      {
        id: 4,
        pregunta: "¿Puedo usar una máscara para Aufields?",
        respuesta:
          "Se prohíben las máscaras ofensivas y de cobertura total. Seguiremos las pautas del gobierno con respecto a todos los revestimientos faciales, así que vuelva a consultar más cerca del evento.",
      },
      {
        id: 5,
        pregunta: "No tengo ninguna pregunta, pero tengo una gran idea.",
        respuesta:
          "Si crees que tienes una gran idea para Creamfields, ¡nos encantaría saber de ti! Envíenos un correo electrónico: info@aufields.cl",
      },
      {
        id: 6,
        pregunta: "¿Puedo traer cristales / espejos?",
        respuesta:
          "No se permite vidrio en Creamfields. Esto incluye perfumes, frascos de base, aftershave y espejos. Estos son artículos prohibidos y serán confiscados en la entrada (tenga en cuenta que no hay posibilidad de dejar sus pertenencias y recogerlas después del espectáculo), así que verifique dos veces antes de llegar al espectáculo. Se aceptan espejos compactos de maquillaje pequeño.",
      },
      {
        id: 7,
        pregunta: "¿Puedo traer una maleta?",
        respuesta:
          "Sí, puede si ha comprado un boleto para acampar, pero recuerde que Aufields está en medio de un campo, le recomendamos traer una mochila. Los titulares de boletos de un día pueden traer una bolsa no más grande que una hoja de papel A4.",
      },
      {
        id: 8,
        pregunta: "¿Necesito otro boleto si compro un paquete Dreamfields?",
        respuesta:
          "El alojamiento de Dreamfields se puede comprar por separado o como un paquete (alojamiento de Dreamfields y su boleto para el festival), sin embargo, debe tener un boleto para el evento para tener acceso al evento y al campamento Dreamfields.",
      },
      {
        id: 9,
        pregunta: "¿Cuánto alcohol puedo traer?",
        respuesta:
          "Solo se puede traer alcohol al festival si está acampando. Hay un límite de 24 latas y una botella de plástico de 1 litro de licor o vino por persona. Cualquier alcohol en botellas de vidrio debe decantarse en botellas de plástico. Las latas se pueden mezclar, p. Ej. 12 sidras y 12 lager y pueden estar sueltas (no en caja) pero no deben exceder 24. Tenga en cuenta que no se puede traer alcohol a la arena del evento, que se aplicará al ingresar a la arena. Estrictamente NO se permiten barriles.",
      },
      {
        id: 10,
        pregunta: "¿Puedo comprar un boleto de día jueves o viernes?",
        respuesta:
          "Los boletos de un día se pueden comprar para el viernes / sábado. También entradas de 2 días para no acampar (viernes y sábado) y entradas de 3 días para no acampar (viernes, sábado)..",
      },
    ],
  },
  getters: {
    questionAvailable: (state) => (question) => {
      return state.topTick.filter((q) => q.pregunta.includes(question));
    },
  },
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
  },
});

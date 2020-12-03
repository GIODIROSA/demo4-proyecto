<template>
  <div>
    <!-- PARALLAX CON RUTA DE INICIO -->
    <div>
      <router-link class="linkChat" :to="{ name: 'Inicio' }">
        <ParallaxChat />
      </router-link>
    </div>
    <!-- DESARROLLO DEL CHAT -->
    <v-container>
      <v-row>
        <v-col cols="12">
          <!-- INICIO DE CARD -->
          <v-card color="blue lighten-4">
            <v-card-text>
              <h3 class="tituloChat">
                Bienvenido:
                <span class="modificarUsuario font-weight-thin">{{
                  usuario.nombre
                }}</span>
              </h3>
              <v-card-subtitle class="text-caption"
                >¡ Los artistas presentes para chatear contigo
                !</v-card-subtitle
              >
            </v-card-text>
            <!-- CAJA DE CHATS -->
            <v-card-text style="height: 60vh; overflow: auto" v-chat-scroll>
              <div
                :class="
                  item.nombre === usuario.nombre ? 'text-right' : 'text-left'
                "
                v-for="(item, index) in mensajes"
                :key="index"
              >
                <v-chip
                  :color="
                    item.nombre === usuario.nombre
                      ? 'amber darken-1'
                      : 'cyan accent-1'
                  "
                  pill
                >
                  <v-avatar left>
                    <v-img :src="item.foto"> </v-img>
                  </v-avatar>
                  {{ item.mensaje }}
                </v-chip>
                <p class="textoFechaChat text-caption ma-1">
                  {{ item.fecha }}
                </p>
              </div>
            </v-card-text>
            <!-- FORMULARIO E INPUT -->
            <v-card-text>
              <v-form
                id="formChat"
                @submit.prevent="enviarMensaje"
                v-model="valido"
              >
                <v-text-field
                  id="mensajeChat"
                  color="amber darken-4"
                  v-model="mensaje"
                  label="Escribe tu mensaje AUFIELDS"
                  required
                  :rules="reglas"
                >
                </v-text-field>
                <v-card-subtitle class="text-caption"
                  >Vista previa de tu mensaje:
                  <span class="modificarMensajeChat">{{ mensaje }}</span>
                </v-card-subtitle>
              </v-form>
              <!-- FINARL DE FORM -->
            </v-card-text>
          </v-card>
          <!-- FINAL DE CARD -->
        </v-col>
      </v-row>
      <!-- BTN DESLOGUEARSE -->
      <div>
        <v-container>
          <h4 class="chatear_artistas text-caption text-center my-5">
            ¡Si quieres cerrar sesión hazlo aquí!
          </h4>
          <div class="d-flex justify-center">
            <v-btn id="btnChatTest" dark class="red accent-3" @click="logOut">
              CERRAR SESIÓN
            </v-btn>
          </div>
        </v-container>
      </div>
      <!-- BTN DESLOGUEARSE -->
      <div class="d-flex justify-center mt-3">
        <v-btn v-for="(icon, index) in icons" :key="index" class="mx-4 " icon>
          <a class="redesLink" :href="icon.link">
            <v-icon color="amber darken-2" size="24px"
              >{{ icon.redes }}
            </v-icon></a
          >
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import firebase from "firebase";
import moment from "moment";
import ParallaxChat from "@/components/minichat/ParallaxChat.vue";
export default {
  name: "Chat",
  components: {
    ParallaxChat,
  },
  data() {
    return {
      mensaje: "",
      valido: false,
      mensajes: [],
      icons: [
        { redes: "mdi-facebook", link: "https://www.facebook.com/" },
        { redes: "mdi-twitter", link: "https://twitter.com/?lang=en" },
        { redes: "mdi-linkedin", link: "https://www.linkedin.com/" },
        { redes: "mdi-instagram", link: "https://www.instagram.com/" },
      ],
      reglas: [
        (v) =>
          !!v || "Tienes que escribirle un mensaje a tu artista favorito....",
      ],
    };
  },
  methods: {
    enviarMensaje() {
      if (this.valido) {
        // GUARDAR EN FIREBASE
        firebase
          .firestore()
          .collection("chats")
          .add({
            mensaje: this.mensaje,
            nombre: this.usuario.nombre,
            foto: this.usuario.foto,
            fecha: Date.now(),
          })
          .catch((error) => console.log("el error es: ", error));

        this.mensaje = "";
      } else {
        this.$swal("No escribiste nada", "Animate! ✏️", "error");
      }
    },

    // DESLOGUEARSE
    logOut() {
      this.$swal("Vuelve pronto!😊", "Usuario desconectado!", "success");
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("/"));
    },
  },
  computed: {
    ...mapState("Chat", ["usuario"]),
  },
  created() {
    moment.locale("es");
    let ref = firebase
      .firestore()
      .collection("chats")
      .orderBy("fecha", "desc")
      .limit(10);
    ref.onSnapshot((querySnapshot) => {
      this.mensajes = [];
      querySnapshot.forEach((doc) => {
        this.mensajes.unshift({
          mensaje: doc.data().mensaje,
          foto: doc.data().foto,
          nombre: doc.data().nombre,
          fecha: moment(doc.data().fecha).format("lll"),
        });
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.linkChat {
  text-decoration: none;
}
.tituloChat {
  color: #e65100;
}
.modificarUsuario {
  color: #ff6d00;
}
.textoFechaChat {
  color: #ff3d00;
}
.modificarMensajeChat {
  color: #ff7043;
}
.redesLink {
  text-decoration: none;
}
</style>

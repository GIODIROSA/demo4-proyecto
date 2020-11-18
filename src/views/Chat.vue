<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-text>
              <h3>Bienvenido: {{ usuario.nombre }}</h3>
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
                <v-chip pill class="yellow lighten-3">
                  <v-avatar left>
                    <v-img :src="item.foto"> </v-img>
                  </v-avatar>
                  {{ item.mensaje }}
                </v-chip>
                <p class="text-caption ma-1">
                  {{ item.fecha }}
                </p>
              </div>
            </v-card-text>
            <!-- FORMULARIO E INPUT -->
            <v-card-text>
              <v-form @submit.prevent="enviarMensaje" v-model="valido">
                <v-text-field
                  v-model="mensaje"
                  label="Escribe tu mensaje AUFIELDS"
                  required
                  :rules="reglas"
                >
                </v-text-field>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <pre>
        {{ $data }}
    </pre>
  </div>
</template>

<script>
import { mapState } from "vuex";
import firebase from "firebase";
import moment from "moment";
export default {
  name: "Chat",
  data() {
    return {
      mensaje: "",
      valido: false,
      mensajes: [],
      reglas: [
        (v) =>
          !!v || "Tienes que escribirle un mensaje a tu artista favorito....",
      ],
    };
  },
  methods: {
    enviarMensaje() {
      if (this.valido) {
        console.log("enviaste un mensaje ", this.mensaje);

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
        console.log("No escribiste nada");
      }
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

<style></style>

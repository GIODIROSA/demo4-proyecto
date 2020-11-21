<template>
  <div>
    <div>
      <v-parallax dark :src="imagenLogin">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-bold mb-4">
              LOGIN
            </h1>
            <h4 class="subheading">
              ¡LOGUEATE PARA DISFRUTAR DE AUFIELDS WEB!
            </h4>
          </v-col>
        </v-row>
      </v-parallax>
    </div>

    <section class="formularioLogin">
      <v-container>
        <v-row>
          <v-col class="menuBtn" cols="12" sm="12" md="12" lg="12">
            <!-- FORM VUETIFY -->
            <v-form class="loginForm" @submit.prevent="login">
              <div class="py-5">
                <v-btn icon color="indigo">
                  <v-icon>mdi-star</v-icon>
                </v-btn>
                <v-btn icon color="green accent-3">
                  <v-icon>mdi-music</v-icon>
                </v-btn>
                <v-btn icon color="amber darken-3">
                  <v-icon>mdi-ticket</v-icon>
                </v-btn>
              </div>
              <div>
                <h3 class="tituloIniciar font-weight-bold my-5">
                  INICIAR SESIÓN
                </h3>
                <p class="mensajeLogin text-caption">
                  {{ parrafoRegistro }}
                </p>
              </div>

              <v-text-field
                color="teal lighten-1"
                label="Email"
                v-model="usuario"
              >
              </v-text-field>
              <v-text-field
                color="teal lighten-1"
                label="Contraseña"
                v-model="contrasena"
              >
              </v-text-field>
              <v-btn dark block color="cyan lighten-4" type="submit"
                >Iniciar Sesion</v-btn
              >
              <v-btn @click="clear" dark block color="teal accent-3 my-3"
                >Clear</v-btn
              >
              <hr />

              <h4 class="my-5 pa-5 pink accent-1 white--text">
                La mejor manera de <span class="modificarChatear">CHATEAR</span>
              </h4>
              <p class="text-caption">
                Tenemos la mejor forma de comunicarse directamente con nuestros
                artistas y chatear con ellos.
              </p>
              <p class="text-caption">
                Solo debes loguear por medio de ¡tu cuenta GOOGLE!
              </p>
              <v-btn
                class="d-flex justify-center"
                dark
                @click="logInGoogle"
                depressed
                color="amber accent-2"
              >
                <v-icon left>mdi-google</v-icon>
                INICIAR SESIÓN
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapMutations, mapState } from "vuex";
export default {
  name: "login",
  data() {
    return {
      usuario: "",
      contrasena: "",
      imagenLogin:
        "https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/ambiente%2Fbannerlogin01.png?alt=media&token=28ab803f-698f-4291-987d-6c029848fb0a",
      parrafoRegistro:
        "Si no puede encontrar su respuesta en nuestra página de preguntas frecuentes, envíe un correo electrónico a cualquier consulta general Correo electrónico: info@aufields.cl. Para cualquier pregunta relacionada con sus boletos,comuníquese con su agente de boletos. Se puede encontrar una lista de contactos de servicio al cliente de los agentes de venta de entradas oficiales en la parte inferior de la página de Entradas.!",
    };
  },
  methods: {
    ...mapMutations("Chat", ["NUEVO_USUARIO"]),
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          (user) => {
            this.$swal("Gracias!", "Usuario Conectado!", "success"),
              this.$router.push({ name: "LineUp" });
          },
          (error) => console.error(error)
        );
    }, //final de login
    clear() {
      this.usuario = "";
      this.contrasena = "";
    }, // final de clear
    //upload google
    logInGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          this.$router.push("/chat");

          const user = result.user;

          // construir usuario
          const usuario = {
            nombre: user.displayName,
            email: user.email,
            uid: user.uid,
            foto: user.photoURL,
          };

          // let user = {
          //   name: result.user.displayName,
          //   photoUrl: result.user.providerData[0].photoURL,
          //   email: result.user.email,
          // };

          // this.createUser(user);
          this.NUEVO_USUARIO(usuario);
          this.createUser(usuario);
        })
        .catch((error) => {
          console.log(error);
        });
    }, //final log in google
    createUser(usuario) {
      firebase
        .firestore()
        .collection("usuarios")
        .add(usuario);
    },
  },
};
</script>

<style lang="scss" scoped>
.formularioLogin {
  width: 450px;
  margin: auto;
}
.tituloIniciar {
  color: #80deea;
}
.politianLogin {
  padding: 20px 0;
  font-weight: 300;
  font-size: 12px;
}
.loginForm {
  width: 300px;
  padding: 10px 0;
}
.imagenLogin {
  widows: 350px;
  height: 350px;
  margin: 150px 0;
}
.modificarChatear {
  color: #039be5;
}
.mensajeLogin {
  color: #757575;
}

form > * {
  display: block;
}
</style>

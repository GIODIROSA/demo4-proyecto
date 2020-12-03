<template>
  <div>
    <div>
      <v-parallax dark :src="imagenLogin">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <router-link class="linkInicioLogin" :to="{ name: 'Inicio' }">
              <h1
                id="loginTest"
                class="display-1 font-weight-bold mb-4 white--text"
              >
                LOGIN
              </h1>
              <h4 class="subheading white--text">
                ¡LOGUEATE PARA DISFRUTAR DE AUFIELDS WEB!
              </h4>
            </router-link>
          </v-col>
        </v-row>
      </v-parallax>
      <v-alert outlined type="success" text>
        Únete a nosotros por medio de Google y podrás chatear con nuestros
        artistas invitado a la edición AUFIELDS 2021
      </v-alert>
    </div>

    <section class="formularioLogin">
      <v-container>
        <!-- FORM VUETIFY -->
        <!-- INICIO DE CARD -->
        <v-row>
          <v-col class="cardLoginForm" cols="12" sm="12" md="12" lg="12">
            <v-card width="350">
              <div>
                <v-form class="my-5" @submit.prevent="login">
                  <v-card-title
                    class="tituloFormularioIniciar font-weight-bold my-5"
                  >
                    INICIAR SESIÓN
                  </v-card-title>
                  <v-card-subtitle class="notaLogin font-weight-thin">
                    Nota:
                  </v-card-subtitle>
                  <v-card-text class="parrafoLogin text-caption">
                    {{ parrafoRegistro }}
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-text class="text-center pink lighten-3 white--text">
                    La mejor manera de
                    <span class="modificarChatear font-weight-bold"
                      >CHATEAR</span
                    >
                  </v-card-text>

                  <v-card-text class="text-caption text-justify">
                    Tenemos la mejor forma de comunicarse directamente con
                    nuestros artistas y chatear con ellos.
                  </v-card-text>

                  <v-card-text class="text-caption text-justify">
                    Tenemos la mejor forma de comunicarse directamente con
                    nuestros artistas y chatear con ellos.
                  </v-card-text>

                  <v-alert outlined type="warning" prominent border="left">
                    Solo debes loguear por medio de ¡tu cuenta GOOGLE!
                  </v-alert>

                  <v-btn
                    block
                    class="btn_iniciarSesion_google d-flex justify-center mb-5"
                    dark
                    @click="logInGoogle"
                    depressed
                    color="amber accent-2"
                  >
                    <v-icon left>mdi-google</v-icon>
                    INICIAR SESIÓN
                  </v-btn>

                  <v-text-field
                    class="ma-5"
                    id="email_test"
                    color="teal lighten-1"
                    label="Email"
                    v-model="usuario"
                  >
                  </v-text-field>
                  <v-text-field
                    class="ma-5"
                    id="contrasena_test"
                    color="teal lighten-1"
                    label="Contraseña"
                    v-model="contrasena"
                  >
                  </v-text-field>
                  <v-btn
                    dark
                    block
                    class="btn-iniciarSesion_test"
                    color="cyan lighten-4"
                    type="submit"
                    depressed
                    >Iniciar Sesion</v-btn
                  >
                  <v-btn
                    @click="clear"
                    dark
                    block
                    color="teal accent-3"
                    class="btn_clear_test my-3"
                    depressed
                    >Clear</v-btn
                  >
                  <v-divider></v-divider>
                </v-form>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!-- FINAL DE CARD -->
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
.linkInicioLogin {
  text-decoration: none;
}
.formularioLogin {
  width: 450px;
  margin: auto;
}
.tituloFormularioIniciar {
  color: #f50057;
}

.parrafoLogin {
  color: #64b5f6;
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

// form > * {
//   display: block;
// }
</style>

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
                <h3>
                  INICIAR SESIÓN
                </h3>
                <p class="politianLogin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio reprehenderit ipsum quas aliquid cum placeat
                  voluptas repellendus voluptatibus totam, incidunt fugit minus
                  quos tenetur ipsam tempora facilis hic natus consequuntur
                  nobis quia praesentium iusto omnis vero maxime! Aliquam alias
                  laborum incidunt perferendis commodi illo, similique, quasi
                  amet consequatur neque nesciunt!
                </p>
              </div>

              <v-text-field
                color="teal lighten-1"
                label="Usuario"
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
              <v-btn
                dark
                block
                @click="logInGoogle"
                depressed
                color="deep-purple accent-3"
              >
                google
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <pre>
        {{ $data }}
    </pre>
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

form > * {
  display: block;
}
</style>

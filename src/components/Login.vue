<template>
  <div class="formularioLogin">
    <h2 class="titleLogin display-1 py-2">Login</h2>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="imgVertical">
            <img class="imgLogin" src="../assets/img/login02.png" alt="" />
          </div>
        </v-col>
        <v-col cols="12" sm="12">
          <!-- button google -->
          <v-btn @click="logInGoogle" depressed color="primary">
            google
          </v-btn>
          <!-- final button -->
          <!-- FORM VUETIFY -->
          <v-form @submit.prevent="login">
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
              >Registrar</v-btn
            >
            <v-btn @click="clear" dark block color="red accent-2 my-3"
              >Clear</v-btn
            >
          </v-form>
        </v-col>
      </v-row>
    </v-container>

    <pre>
        {{ $data }}
    </pre>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      usuario: "",
      contrasena: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          (user) => {
            alert("usuario conectado"), this.$router.replace("lineup");
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
          console.log("result");
          this.$router.replace("lineup");

          let user = {
            name: result.user.displayName,
            photoUrl: result.user.providerData[0].photoURL,
            email: result.user.email,
          };
          this.createUser(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }, //final upload
    createUser(user) {
      firebase
        .firestore()
        .collection("usuarios")
        .add(user);
    },
  },
};
</script>

<style lang="scss" scoped>
.formularioLogin {
  background: #b39ddb;
  .titleLogin {
    text-align: center;
  }
}
.imgVertical {
  display: flex;
  justify-content: center;
  align-content: center;
}

.imgLogin {
  width: 250px;
  height: 400;
}
form > * {
  display: block;
}
</style>

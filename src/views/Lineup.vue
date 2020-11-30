<template>
  <div>
    <div class="bannerLineUp">
      <Slider :sliderImagen="sliderImagen" />
    </div>
    <div class="blue lighten-4">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="3" lg="3" xl="3">
            <!-- BORIS BREJCHA -->
            <iframe
              height="315"
              src="https://www.youtube.com/embed/vqz8c4ZP3Wg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-col>

          <v-col cols="12" sm="6" md="3" lg="3" xl="3">
            <!-- CHARLOTTE DE WITTE -->
            <iframe
              height="315"
              src="https://www.youtube.com/embed/3cOOu52n26c?start=511"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-col>

          <v-col cols="12" sm="6" md="3" lg="3" xl="3">
            <!-- MARTIN GARRIX -->
            <iframe
              height="315"
              src="https://www.youtube.com/embed/Pnp_7IaqW74"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-col>

          <v-col cols="12" sm="6" md="3" lg="3">
            <!-- AMELIE LENS -->
            <iframe
              height="315"
              src="https://www.youtube.com/embed/d1-Xc7EfT44?start=11"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="textoCarousel">
      <h1 class="tituloCarousel light-green accent-1">
        AUFIELDS
        <span class="modificacionTextoCarousel font-weight-light"
          >CHILE - 2021</span
        >
      </h1>
    </div>

    <!-- BTN DESLOGUEARME -->
    <div>
      <v-container>
        <h4 class="chatear_artistas text-caption text-center my-5">
          ¡Si quieres cerrar sesión hazlo aquí!
        </h4>
        <div class="d-flex justify-center">
          <v-btn id="btnchat_test" dark class="red accent-3" @click="logOut">
            CERRAR SESIÓN
          </v-btn>
        </div>
      </v-container>
    </div>

    <!-- FINAL BTN DESLOGUEARME -->

    <!-- BTN CHAT -->
    <div>
      <v-container>
        <h4 class="chatear_artistas text-caption text-center my-5">
          ¡Ahora podrás chatear con nuestros artistas invitados!
        </h4>
        <div class="d-flex justify-center">
          <router-link class="linkChat" :to="{ name: 'Chat' }">
            <v-btn id="btnchat_test" dark class="amber darken-2">
              CHATEA CON NUESTROS ARTISTAS
            </v-btn>
          </router-link>
        </div>
      </v-container>
    </div>

    <!-- FINAL BTN CHAT -->

    <v-container>
      <v-row>
        <v-col md="6" v-for="(artista, index) in artistas" :key="index">
          <CardLineup :artista="artista" />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <div>
        <h5 id="notaArtista" class="text-caption text-center">
          ¡Los artistas Dj, los máximos exponentes de la música electrónica
          reunidos en un solo concierto! 06 y 07 de Noviembre de 2021 Santiago-
          Chile.
        </h5>
      </div>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapState } from "vuex";
import CardLineup from "@/components/lineUp/CardLineup.vue";
import Slider from "@/components/lineUp/Slider.vue";

export default {
  name: "Lineup",
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    logOut() {
      this.$swal("Vuelve pronto!😊", "Usuario desconectado!", "success");
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("/"));
    },
  },
  computed: {
    ...mapState(["artistas"]),
    ...mapState("Imagenes", ["sliderImagen"]),
  },
  components: {
    CardLineup,
    Slider,
  },
};
</script>

<style lang="scss" scoped>
.titleDj {
  height: 15.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tituloCarousel {
  text-align: center;
  color: #b388ff;
}
.modificacionTextoCarousel {
  color: #ff6d00;
}
.videosArtistas {
  height: 350px;
}
.linkChat {
  text-decoration: none;
}
.chatear_artistas {
  color: #9fa8da;
}
#notaArtista {
  color: #9fa8da;
}
</style>

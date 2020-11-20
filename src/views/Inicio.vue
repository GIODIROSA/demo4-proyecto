<template>
  <div>
    <div>
      <v-parallax class="parallaxInicio" dark :src="imagenInicio">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <!-- LOGOTIPO -->
            <div class="logotipo">
              <img
                class="imagenLogotipo"
                src="../assets/img/logotipo03-02-02.svg"
                alt="logotipo"
              />
            </div>
            <!-- FINAL LOGOTIPO -->

            <p class="text-caption">
              {{ subtitulo }}
            </p>

            <v-btn dark class="purple accent-1" block :to="{ name: 'Tickets' }">
              Comprar tickets Aufields
            </v-btn>

            <v-btn
              dark
              class="teal accent-3 my-3"
              block
              :to="{ name: 'LineUp' }"
            >
              LineUp
            </v-btn>
          </v-col>
        </v-row>
      </v-parallax>
    </div>

    <div class="d-flex justify-center mt-3">
      <v-btn v-for="(icon, index) in icons" :key="index" class="mx-4 " icon>
        <a :href="icon.link">
          <v-icon color="light-blue lighten-4" size="24px"
            >{{ icon.redes }}
          </v-icon></a
        >
      </v-btn>
    </div>

    <div class="PostArtistas my-2">
      <PostArtistas :artistas="artistas" />
    </div>

    <!-- PARALLAX -->
    <v-parallax dark :src="parallaxInicio">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">
            AUFIELDS
          </h1>
          <h4 class="subheading">
            CONCIERTO DE MÚSICA ELECTRÓNICA MÁS GRANDE DE SUR AMÉRICA
          </h4>
        </v-col>
      </v-row>
    </v-parallax>

    <!-- FINAL DE PARALLAX -->
    <!-- AREAS DE CONCIERTO -->
    <AreaConcierto :areas="areas" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PostArtistas from "@/components/inicio/PostArtistas.vue";
import AreaConcierto from "@/components/inicio/AreaConcierto.vue";

export default {
  name: "Inicio",
  data() {
    return {
      show: false,
      imagenInicio:
        "https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/ambiente%2Fbanner-inicial02.png?alt=media&token=36e4f3b5-4a81-4f28-8ccf-91454a9ca1e7",
      parallaxInicio:
        "https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/ambiente%2Fparallax01.jpg?alt=media&token=7f62d356-00e0-445b-bd77-31cde9bc2037",
      icons: [
        { redes: "mdi-facebook", link: "https://www.facebook.com/" },
        { redes: "mdi-twitter", link: "https://twitter.com/?lang=en" },
        { redes: "mdi-linkedin", link: "https://www.linkedin.com/" },
        { redes: "mdi-instagram", link: "https://www.instagram.com/" },
      ],
      subtitulo:
        " EL CONCIERTO DE MÚSICA ELECTRÓNICA MÁS GRANDE DE AMÉRICA DEL SUR, AUFIELDS CHILE - 2021",
    };
  }, //final de data
  computed: {
    ...mapState(["artistas"]),
    ...mapState("Areas", ["areas"]),
  }, //final de computed
  components: {
    PostArtistas,
    AreaConcierto,
  },
  created() {
    this.artistas;
  },
};
</script>

<style lang="scss" scoped>
.parallaxInicio {
  height: 950px;
  .imagenLogotipo {
    width: 350px;
    height: 350px;
  }
}
.heroSection {
  background-image: url("../assets/img/banner-inicial02.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 750px;
  .logotipo {
    display: flex;
    justify-content: center;
    align-content: center;
    padding-top: 100px;
  }
}

.areasConcierto {
  padding: 120px 0;

  .areaGeneraltitle {
    color: #80deea;
  }
  .hospitalityAreaTitle {
    color: #f48fb1;
  }
  .textoAreaGeneral {
    color: gray;
    font-weight: 300;
    font-family: "Montserrat", sans-serif;
  }
}
</style>

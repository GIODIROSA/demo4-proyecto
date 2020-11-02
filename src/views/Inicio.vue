<template>
  <div>
    <!-- BANNER PRINCIPAL -->
    <section>
      <div class="heroSection">
        <div class="logotipo">
          <img
            class="imagenLogotipo"
            src="../assets/img/logotipo03-02-02.svg"
            alt="logotipo"
          />
        </div>
        <v-container>
          <v-row>
            <h3 class="titleBanner display-2 white--text">CHILE 2021</h3>
            <v-btn dark class="purple accent-1" block :to="{ name: 'Tickets' }"
              >Comprar tickets Aufields</v-btn
            >
            <v-btn
              dark
              class="teal accent-3 my-3"
              block
              :to="{ name: 'LineUp' }"
              >Line Up</v-btn
            >
          </v-row>
        </v-container>
      </div>
    </section>
    <!-- FINAL BANNER PRINCIPAL -->
    <div class="PostArtistas">
      <PostArtistas :artistas="artistas" />
    </div>
    
   
    <!-- PARALLAX -->
    <v-parallax dark src="../assets/img/parallax01.jpg">
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
     <AreaConcierto :areas= "areas" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PostArtistas from "@/components/inicio/PostArtistas.vue";
import AreaConcierto from "@/components/inicio/AreaConcierto.vue";

// @ is an alias to /src

export default {
  name: "Inicio",
  data() {
    return {
      show: false,
    };
  }, //final de data
  computed: {
    ...mapState(["artistas"]),
    ...mapState("Areas",["areas"]),

  }, //final de computed
  components: {
    PostArtistas,
    AreaConcierto,
  },
};
</script>

<style lang="scss" scoped>
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
    .imagenLogotipo {
      width: 350px;
      height: 350px;
    }
  }
}
.PostArtistas {
  background: #f5f6f5;
}
.titleBanner {
  display: block;
  margin: auto;
  padding: 20px;
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

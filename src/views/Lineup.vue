<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="6" v-for="(artista, index) in artistas" :key="index">
          <CardLineup :artista="artista" />
        </v-col>
      </v-row>
      <v-btn block color="pink" @click="logOut">
        Cerrar sesion
      </v-btn>
    </v-container>
    <!-- fin dialog -->
  </div>
</template>

<script>
import firebase from "firebase";
import { mapState } from "vuex";
import CardLineup from "@/components/lineUp/CardLineup.vue";
export default {
  name: "Lineup",
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    logOut() {
      alert("Usuario se ha desconectado");
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("login"));
    },
  }, //final methods
  computed: {
    ...mapState(["artistas"]),
  },
  components: {
    CardLineup,
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
</style>

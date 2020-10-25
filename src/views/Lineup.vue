<template>
  <div>
    <BaseCardsLineUp />
    <!-- fin dialog -->
    <button @click="logOut">Log Out</button>
  </div>
</template>

<script>
import firebase from "firebase";
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

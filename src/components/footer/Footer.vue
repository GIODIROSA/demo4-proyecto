<template>
  <div>
    <v-footer padless>
      <v-card
        flat
        tile
        class="footerEvento indigo lighten-5 white--text text-center"
      >
        <v-card-text class="d-flex justify-center">
          <v-btn
            v-for="(icon, index) in icons"
            :key="index"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon.redes }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Aufields</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "BaseFooter",
  data() {
    return {
      icons: [
        { redes: "mdi-facebook" },
        { redes: "mdi-twitter" },
        { redes: "mdi-linkedin" },
        { redes: "mdi-instagram" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

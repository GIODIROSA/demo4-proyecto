<template>
  <div>
    <v-footer dark padless>
      <v-card flat tile class="deep-purple accent-2 lighten-1 white--text text-center">
        <v-card-text>
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

        <v-card-text class=" pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
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

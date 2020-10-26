<template>
  <div class="py-10">
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="3"
          v-for="(artista, index) in artistas"
          :key="index"
        >
          <v-card>
            <v-card-title class="green accent-1">
              <span class="headline">{{ artista.data.name }}</span>

              <v-spacer></v-spacer>

              <v-btn dark icon>
                <v-icon>mdi-music</v-icon>
              </v-btn>
            </v-card-title>

            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-phone</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>(650) 555-1234</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>mdi-message-text</v-icon>
                </v-list-item-action>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-phone</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>(323) 555-6789</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-icon>mdi-message-text</v-icon>
                </v-list-item-action>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>mcbeal@example.com</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>Orlando, FL 79938</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-img :src="artista.data.imagen" height="400px"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BaseCardsdj",
  data() {
    return {};
  }, //final de data
  computed: {
    ...mapState(["artistas"]),
  },
};
</script>

<style lang="scss" scoped></style>

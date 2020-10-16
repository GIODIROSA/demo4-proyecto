<template>
  <div class="py-10">
    <!-- BUSCAR LA MANERA DE OPTIMIZAR ESTA PARTE -->

    <v-container>
      <v-row wrap>
        <!-- cards artista UNO -->
        <v-col cols="12" md="3" sm="6">
          <v-card class="mx-auto" max-width="344">
            <v-img src="../assets/img/amelielens01.png" height="400px"></v-img>

            <v-card-title>
              Amelie Lens
            </v-card-title>

            <v-card-subtitle>
              Belgica
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text :to="{ name: 'LineUp' }">
                Biografia
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="amelie = !amelie">
                <v-icon>{{
                  amelie ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="amelie">
                <v-divider></v-divider>

                <v-card-text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt optio beatae sint animi suscipit laboriosam labore
                  quae ad doloremque ipsum explicabo, eum sunt earum tempore
                  modi inventore ut similique quod asperiores molestias
                  aspernatur! Suscipit, perspiciatis iure odio consectetur fugit
                  minus officia ducimus autem in praesentium labore repudiandae,
                  eum blanditiis aliquam.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <!-- cards artista DOS -->
        <v-col cols="12" md="3" sm="6">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="../assets/img/borisbrejcha01.png"
              height="400px"
            ></v-img>

            <v-card-title>
              Boris Brejcha
            </v-card-title>

            <v-card-subtitle>
              Alemania
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text :to="{ name: 'LineUp' }">
                Biografia
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="boris = !boris">
                <v-icon>{{
                  boris ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="boris">
                <v-divider></v-divider>

                <v-card-text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt optio beatae sint animi suscipit laboriosam labore
                  quae ad doloremque ipsum explicabo, eum sunt earum tempore
                  modi inventore ut similique quod asperiores molestias
                  aspernatur! Suscipit, perspiciatis iure odio consectetur fugit
                  minus officia ducimus autem in praesentium labore repudiandae,
                  eum blanditiis aliquam.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <!-- cards artista TRES -->
        <v-col cols="12" md="3" sm="6">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="../assets/img/charlottedewitte01.png"
              height="400px"
            ></v-img>

            <v-card-title>
              Charlotte de Witte
            </v-card-title>

            <v-card-subtitle>
              Belgica
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text :to="{ name: 'LineUp' }">
                Biografia
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="charlotte = !charlotte">
                <v-icon>{{
                  charlotte ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="charlotte">
                <v-divider></v-divider>

                <v-card-text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt optio beatae sint animi suscipit laboriosam labore
                  quae ad doloremque ipsum explicabo, eum sunt earum tempore
                  modi inventore ut similique quod asperiores molestias
                  aspernatur! Suscipit, perspiciatis iure odio consectetur fugit
                  minus officia ducimus autem in praesentium labore repudiandae,
                  eum blanditiis aliquam.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <!-- cards artista CUATRO -->
        <v-col cols="12" md="3" sm="6">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="../assets/img/martingarrix01.png"
              height="400px"
            ></v-img>

            <v-card-title>
              Martin Garrix
            </v-card-title>

            <v-card-subtitle>
              Holanda
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text :to="{ name: 'LineUp' }">
                Biografia
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="martin = !martin">
                <v-icon>{{
                  martin ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="martin">
                <v-divider></v-divider>

                <v-card-text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt optio beatae sint animi suscipit laboriosam labore
                  quae ad doloremque ipsum explicabo, eum sunt earum tempore
                  modi inventore ut similique quod asperiores molestias
                  aspernatur! Suscipit, perspiciatis iure odio consectetur fugit
                  minus officia ducimus autem in praesentium labore repudiandae,
                  eum blanditiis aliquam.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "BaseCardsdj",
  data() {
    return {
      amelie: false,
      charlotte: false,
      boris: false,
      martin: false,
     
    };
  }, //final de data
 
};
</script>

<style lang="scss" scoped></style>

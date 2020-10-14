<template>
  <v-container>
    <v-row wrap>
      <!-- UNO -->
      <v-col xs="12" sm="6">
        <v-card>
          <v-img src="../assets/img/16.png">
            <div class="titleDj">
              <h2 class=" white--text headline">
                Adam Beyer
              </h2>
            </div>
          </v-img>
          <v-card-title>
            <h3>Lorem, ipsum dolor.</h3>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, quis cum dolore eos velit sit sed, nisi quam vel
              laudantium voluptas iste doloremque inventore sapiente est debitis
              officia doloribus delectus, eaque aspernatur nostrum. Possimus
              consequuntur vel cumque molestiae explicabo ullam dolores
              blanditiis modi minima harum fuga in, saepe fugit tenetur repellat
              porro aspernatur quam dolorum eos neque vero quasi voluptatem
              velit praesentium! Eos, nesciunt eligendi? Hic, adipisci
              laboriosam, eos sint exercitationem, nobis quibusdam in ad minima
              repellendus consequatur alias ducimus rerum modi vel odio et sit
              aperiam praesentium. Harum odio architecto consectetur delectus
              facere vero accusamus quibusdam iure reiciendis ea?
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="info" elevation="2" text @click="dialog = true"
              >Accion</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- DOS -->
      <v-col xs="12" sm="6">
        <v-card>
          <v-img src="../assets/img/16.png">
            <div class="titleDj">
              <h2 class=" white--text headline">Amelie Lens</h2>
            </div>
          </v-img>
          <v-card-title>
            <h3>Lorem, ipsum dolor.</h3>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, quis cum dolore eos velit sit sed, nisi quam vel
              laudantium voluptas iste doloremque inventore sapiente est debitis
              officia doloribus delectus, eaque aspernatur nostrum. Possimus
              consequuntur vel cumque molestiae explicabo ullam dolores
              blanditiis modi minima harum fuga in, saepe fugit tenetur repellat
              porro aspernatur quam dolorum eos neque vero quasi voluptatem
              velit praesentium! Eos, nesciunt eligendi? Hic, adipisci
              laboriosam, eos sint exercitationem, nobis quibusdam in ad minima
              repellendus consequatur alias ducimus rerum modi vel odio et sit
              aperiam praesentium. Harum odio architecto consectetur delectus
              facere vero accusamus quibusdam iure reiciendis ea?
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="info" elevation="2" text @click="dialog = true"
              >Accion</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- TRES -->
      <v-col xs="12" sm="6">
        <v-card>
          <v-img src="../assets/img/16.png"> </v-img>
          <v-card-title>
            <h3>Lorem, ipsum dolor.</h3>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, quis cum dolore eos velit sit sed, nisi quam vel
              laudantium voluptas iste doloremque inventore sapiente est debitis
              officia doloribus delectus, eaque aspernatur nostrum. Possimus
              consequuntur vel cumque molestiae explicabo ullam dolores
              blanditiis modi minima harum fuga in, saepe fugit tenetur repellat
              porro aspernatur quam dolorum eos neque vero quasi voluptatem
              velit praesentium! Eos, nesciunt eligendi? Hic, adipisci
              laboriosam, eos sint exercitationem, nobis quibusdam in ad minima
              repellendus consequatur alias ducimus rerum modi vel odio et sit
              aperiam praesentium. Harum odio architecto consectetur delectus
              facere vero accusamus quibusdam iure reiciendis ea?
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="info" elevation="2" text @click="dialog = true"
              >Accion</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- CUATRO -->
      <v-col xs="12" sm="6">
        <v-card>
          <v-img src="../assets/img/16.png"> </v-img>
          <v-card-title>
            <h3>Lorem, ipsum dolor.</h3>
          </v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, quis cum dolore eos velit sit sed, nisi quam vel
              laudantium voluptas iste doloremque inventore sapiente est debitis
              officia doloribus delectus, eaque aspernatur nostrum. Possimus
              consequuntur vel cumque molestiae explicabo ullam dolores
              blanditiis modi minima harum fuga in, saepe fugit tenetur repellat
              porro aspernatur quam dolorum eos neque vero quasi voluptatem
              velit praesentium! Eos, nesciunt eligendi? Hic, adipisci
              laboriosam, eos sint exercitationem, nobis quibusdam in ad minima
              repellendus consequatur alias ducimus rerum modi vel odio et sit
              aperiam praesentium. Harum odio architecto consectetur delectus
              facere vero accusamus quibusdam iure reiciendis ea?
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="info" elevation="2" text @click="dialog = true"
              >Accion</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- dialog -->
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title>
          <h4>
            Este es el titulo
          </h4>
        </v-card-title>
        <v-card-texto>
          <p class="px-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            maxime, cumque ipsum recusandae, sed repudiandae aliquam vitae
            temporibus earum quibusdam aperiam dignissimos. Beatae accusantium
            natus numquam ut eaque quam cum fuga deleniti aliquam atque,
            distinctio repudiandae
          </p>
        </v-card-texto>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn>
            cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- fin dialog -->
  </v-container>
</template>

<script>
export default {
  name: "Lineup",
  data() {
    return {
      dialog: false,
    };
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

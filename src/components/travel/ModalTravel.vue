<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-container>
          <div class="botonMedioTransporte">
            <h5 class="mensajeTravel font-weight-light">
              <span class="notaTravel font-weight-bold">Nota: </span> Para
              revisar de que manera puedes llegar al concierto
            </h5>
            <v-btn block color="lime accent-3" dark v-bind="attrs" v-on="on">
              Medios de transporte
            </v-btn>
          </div>
        </v-container>
      </template>
      <v-card>
        <v-toolbar dark color="purple accent-1">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Medios para llegar a AUFIELDS</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark :to="{ name: 'Travel' }" text @click="dialog = false">
              TRAVEL
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader
            >Diferentes medios para que vengas a disfrutar del evento más grande
            de música electrónica</v-subheader
          >
        </v-list>
        <v-divider></v-divider>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-card class="mx-auto" max-width="344">
                <v-img
                  src="https://clustersalud.americaeconomia.com/sites/clustersalud.americaeconomia.com/files/styles/article_main/public/wp-content/uploads/2016/06/avion.jpg?itok=AfH9WeZy"
                  height="400px"
                ></v-img>
              </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6">
              <div class="py-3">
                <h3>
                  Llegada en Avion a Santiago
                </h3>
                <v-list-item-subtitle
                  >Aeropuerto Internacional Arturo Merino
                  Benítez</v-list-item-subtitle
                >
              </div>

              <p class="text-justify font-weight-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quibusdam nihil, quisquam, provident expedita, error assumenda
                laborum tempore esse earum alias itaque quos at delectus
                adipisci explicabo voluptatem dolore saepe optio laboriosam!
                Excepturi sed omnis molestias quaerat illo, veniam nam odio ipsa
                nisi voluptatibus animi saepe est tempore quisquam ex unde
                itaque? Est qui laudantium optio, commodi et doloremque corrupti
                neque accusantium placeat iusto ullam repellendus veritatis
                nostrum vitae officiis a numquam molestias, magni, sed nobis
                distinctio facere reiciendis repellat! Facilis minus corporis
                quae tempore eaque expedita fugiat eum ab doloremque omnis dolor
                sint aliquid ipsum, dolorum accusantium. Ex impedit, rem eaque
                non delectus harum quibusdam recusandae minima itaque odio
                voluptatibus obcaecati explicabo dolorum corporis asperiores
                aliquid exercitationem repellat ad ducimus earum consequuntur
                culpa debitis dolor iusto? Maiores officia natus excepturi
                asperiores veniam enim sunt, ullam quam quisquam molestiae
                dignissimos laboriosam perspiciatis beatae at, sequi autem
                recusandae? Eos sunt iure perferendis?
              </p>
            </v-col>
          </v-row>
          <v-divider inset class="py-2"></v-divider>
          <h1 class="tituloCompartir">
            ¿Porqué no compartes?
          </h1>
          <p class="text-justify font-weight-light py-3">
            Dirígete para encontrar viajeros que se dirigen desde tu área o para
            alquilar tus propios asientos para el automóvil para que otros se
            unan a ti. Los propietarios de automóviles establecen su propio
            precio para compartir el costo del combustible, y es una forma
            barata y ecológica de hacer nuevos amigos y encontrar socios
            delirantes para toda la vida.
          </p>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.tituloCompartir {
  font-weight: 600;
  font-size: 30px;
  color: #ff80ab;
  font-family: "Montserrat", sans-serif;
}
.botonMedioTransporte {
  margin-bottom: 50px;
}
.notaTravel {
  color: #64dd17;
}
.mensajeTravel {
  padding: 20px 0;
}
</style>

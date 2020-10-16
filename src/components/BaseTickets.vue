<template>
  <div>
    <h1>estoy probando</h1>
    <v-container>
      <v-row>
        <v-col>
          <!-- STANDARD ONEDAY -->
          <v-card
            v-for="(ticket, index) in ticketStandard"
            :key="index"
            color="light-green accent-2"
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="450" src="../assets/img/standardOneday.jpg"></v-img>

            <v-card-title>{{ ticket.title }}</v-card-title>

            <v-card-text>
              <div class="my-2 subtitle-1">
                {{ ticket.subtitle }}
              </div>
              <div class="my-2 subtitle-1">
                {{ ticket.artist }}
              </div>

              <div>
                <p>
                  {{ ticket.condition }}
                </p>
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>{{ ticket.titleDate }}</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>20:00H</v-chip>

                <v-chip>21:00H</v-chip>

                <v-chip>22:00H</v-chip>

                <v-chip>23:00H</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text @click="reserve">
                COMPRAR
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- FINAL ONEDAY -->
        <!-- STANDARD TWODAY -->
        <v-col>
          <v-card v-for="(tick, index) in ticketStandardTwo" :key="index" :loading="loading" class="mx-auto my-12" max-width="374">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="450" src="../assets/img/ticketsOneDay.png"></v-img>

            <v-card-title>{{tick.title}}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ml-4">
                  4.5 (413)
                </div>
              </v-row>

              <div class="my-4 subtitle-1">
                {{tick.subtitle}}
              </div>

              <div>
                <p>
                  {{tick.condition}}
                </p>
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Tonight's availability</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>

                <v-chip>8:00PM</v-chip>

                <v-chip>9:00PM</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text @click="reserve">
                Reserve
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "BaseTickets",
  data() {
    return {
      ticketStandard: [
        {
          title: "OneDay Standard",
          subtitle: "Chile 2021",
          artist: "Amelie Lens, Boris Brejcha",
          condition:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32",
          titleDate: "06 Noviembre",
        },
      ],
       ticketStandardTwo: [
        {
          title: "TwoDay Standard",
          subtitle: "Chile 2021",
          artist: "Charlotte de Witte, Martin Garrix",
          condition:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32",
          titleDate: "06-07 Noviembre",
        },
      ],
    };
  },
};
</script>

<style></style>

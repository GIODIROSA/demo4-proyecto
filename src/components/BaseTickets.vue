<template>
  <div>
    <v-container>
      <v-row>
        <!-- STANDARD ONEDAY -->
        <v-col cols="12" sm="6" md="6" lg="3">
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
              <div class="subtitle-1">
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
                v-model="selectionStandardOne"
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
        <!-- STANDARD TWODAY -->
        <v-col cols="12" sm="6" md="6" lg="3">
          <v-card
            v-for="(tick, index) in ticketStandardTwo"
            color="teal accent-1"
            :key="index"
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                color="teal accent-1"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="450" src="../assets/img/ticketsOneDay.png"></v-img>

            <v-card-title>{{ tick.title }}</v-card-title>

            <v-card-text>
              <div class="my-2 subtitle-1">
                {{ tick.subtitle }}
              </div>
              <div class="my- subtitle-1">
                {{ tick.artist }}
              </div>

              <div>
                <p>
                  {{ tick.condition }}
                </p>
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>{{ tick.titleDate }}</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selectionStandardTwo"
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
        <!-- STANDARD ONE DAY GOLD -->
        <v-col cols="12" sm="6" md="6" lg="3">
          <v-card
            v-for="(gold, index) in ticketOnedayGold"
            color="amber lighten-1"
            :key="index"
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                color="teal accent-1"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="450"
              src="../assets/img/ticketsOneDayGOLD.png"
            ></v-img>

            <v-card-title>{{ gold.title }}</v-card-title>

            <v-card-text>
              <div class="my-2 subtitle-1">
                {{ gold.subtitle }}
              </div>
              <div class="my- subtitle-1">
                {{ gold.artist }}
              </div>

              <div>
                <p>
                  {{ gold.condition }}
                </p>
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>{{ gold.titleDate }}</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selectionGoldOne"
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
        <!-- STANDARD ONE DAY GOLD -->
        <v-col cols="12" sm="6" md="6" lg="3">
          <v-card
            dark
            v-for="(gold2, index) in ticketTwodayGold"
            color="indigo darken-4"
            :key="index"
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                color="teal accent-1"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="450"
              src="../assets/img/ticketsTwoDayGold.png"
            ></v-img>

            <v-card-title>{{ gold2.title }}</v-card-title>

            <v-card-text>
              <div class="my-2 subtitle-1">
                {{ gold2.subtitle }}
              </div>
              <div class="my- subtitle-1">
                {{ gold2.artist }}
              </div>

              <div>
                <p>
                  {{ gold2.condition }}
                </p>
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>{{ gold2.titleDate }}</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selectionGoldtwo"
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
      ticketOnedayGold: [
        {
          title: "OneDay Gold",
          subtitle: "Chile 2021",
          artist: "Amelie Lens, Boris Brejcha",
          area: " Derecho Area Hospitality",
          condition:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32",
          titleDate: "06 Noviembre",
        },
      ],
      ticketTwodayGold: [
        {
          title: "TwoDay Gold",
          subtitle: "Chile 2021",
          artist: "Charlotte de Witte, Martin Garrix",
          area: " Derecho Area Hospitality y Area VIP",
          condition:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32",
          titleDate: "06-07 Noviembre",
        },
      ],
      loading: false,
      selectionGoldtwo: 1,
      selectionGoldOne: 1,
      selectionStandardTwo: 1,
      selectionStandardOne: 1,

    };
  }, //final de data
  
};
</script>

<style></style>

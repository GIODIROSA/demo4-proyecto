<template>
  <div>
    <v-card color="indigo lighten-4" class="mx-auto" max-width="550">
      <v-img :src="artista.data.photo" height="400px"></v-img>

      <v-card-title>
        {{ artista.data.name }}
      </v-card-title>

      <v-card-subtitle>
        {{ artista.data.born }}
      </v-card-subtitle>
      <v-card-text>
        <span class="categoria">Genero:</span>
        {{ artista.data.genres }}
        <br />
        <span class="categoria"> Ocupación:</span>
        {{ artista.data.occupation }}
        <br />
        <span class="categoria"> Website:</span>
        {{ artista.data.website }}
        <br />
        <span class="categoria"> Actividad:</span>
        {{ artista.data.active }}
        <br />
        <span class="categoria"> Ciudad:</span>
        {{ artista.data.city }}
        <br />
        <span class="categoria"> Pais:</span>
        {{ artista.data.country }}
        <br />
        <span class="categoria"> Region:</span>
        {{ artista.data.region }}
        <br />
        <span class="categoria"> Canal:</span>
        <a :href="artista.data.channel">{{ artista.data.channel }}</a>
      </v-card-text>
      <v-spacer></v-spacer>
      <v-card-text>
        <span class="categoria"> Instagram:</span>
        {{ artista.data.instagram }}
        <br />
        <span class="categoria"> Twitter:</span>
        {{ artista.data.twitter }}
        <br />
        <span class="categoria"> SoundCloud:</span>
        {{ artista.data.soundcloud }}
        <br />
        <span class="categoria"> Facebook:</span>
        {{ artista.data.facebook }}
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange lighten-2" text>
          Biografía
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="artista.data.state = !artista.data.state">
          <v-icon>{{
            artista.data.state ? "mdi-chevron-up" : "mdi-chevron-down"
          }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="artista.data.state">
          <v-divider></v-divider>

          <v-card-text>
            <p>
              {{ artista.data.description }}
            </p>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CardLineup",
  props: ["artista"],
  data() {
    return {
      show: false,
    };
  },
};
</script>

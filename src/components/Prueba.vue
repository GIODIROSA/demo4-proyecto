<template>
<div>
    <h1>Inicio de la prueba</h1>
<!-- card -->
<v-container>
    <v-row>
        <v-col v-for="(artista, index) in artistas" :key="index">
             <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="500px"
      :src="artista.data.photo"
    >
      <v-card-title>{{artista.data.name}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
     {{artista.data.genres}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{artista.data.born}}</div>

      <div>{{artista.data.website}}</div>
      <div>
        <p>
          {{artista.data.description}}
        </p>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
        </v-col>
    </v-row>
</v-container>

    <pre>
        {{$data}}
    </pre>

</div>
  
</template>

<script>
import firebase from 'firebase'
export default {
    name: "Prueba",
    data() {
        return {
            artistas: [],
        }
    },
    mounted () {
        firebase.firestore().collection('artists').onSnapshot((snapshot)=>{
            snapshot.forEach((doc)=>{
                this.artistas.push({
                    // id: doc.id,
                    data: doc.data(),
                })
            })
        })
    },


}
</script>

<style>

</style>
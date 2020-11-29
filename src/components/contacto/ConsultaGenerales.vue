<template>
  <div class="py-3">
    <ImagenContacto />

    <v-container>
      <v-row>
        <v-col cols="12" v-for="(item, index) in consultas" :key="index">
          <v-card>
            <v-card-title class="tituloContacto blue-grey lighten-4">
              {{ item.data.titulo }}
            </v-card-title>
            <v-card-text class="text-justify my-5">
              {{ item.data.descripcion }}
            </v-card-text>
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ImagenContacto from "@/components/contacto/ImagenContacto.vue";
import { mapState } from "vuex";
export default {
  name: "Contacto",
  data: () => ({}),

  methods: {},
  components: {
    ImagenContacto,
  },
  computed: {
    ...mapState("Comentarios", ["consultas"]),
  },
};
</script>

<style lang="scss" scoped>
.tituloContacto {
  color: #bdbdbd;
}
</style>

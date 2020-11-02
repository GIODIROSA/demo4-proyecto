<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6" v-for="(area, index) in areas" :key="index">
          <h5>
            {{ area.data.titulo }}
          </h5>
          <p>
            {{ area.data.descripcion }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AreaConcierto",
  props: ["areas"],
};
</script>

<style lang="scss" scoped></style>

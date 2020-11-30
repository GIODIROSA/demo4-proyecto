<template>
  <div>
    <!-- CABECERA DE IMAGEN PARALLAX PARA LA VISTA DE TRAVEL -->
    <div class="bannerTravel">
      <v-parallax class="parallaxImagenTravel" dark :src="imagenTravel">
        <v-row align="center" justify="center">
          <!-- iMAGEN ESTATICA Y LOCAL PARA EL EFECTO DE SOBREPOSICIÓN -->
          <img
            class="imagenTravel"
            src="../assets/img/mascara01.png"
            alt="imagen travel"
          />
        </v-row>
      </v-parallax>
      <!-- FINAL DE PARALLAX -->
    </div>
    <!-- COMPONENTE DE PRESENTACION DE TRAVEL, LINEA DEL METRO -->
    <Timeline />
    <!-- AMPLIACIÓN DE LA INFORMACIÓN DE RUTA PARA LLEGAR AL SITIO DEL CONCIERTO -->
    <ModalTravel />
  </div>
</template>

<script>
// COMPONENTES DE LA VISTA TRAVEL
import Timeline from "@/components/travel/Timeline.vue";
import ModalTravel from "@/components/travel/ModalTravel.vue";

export default {
  name: "Travel",
  data() {
    return {
      imagenTravel:
        "https://firebasestorage.googleapis.com/v0/b/proyecto-final-1-afa97.appspot.com/o/ambiente%2Fbannertravel.png?alt=media&token=49919005-ab7d-4749-ac88-a49f8e31ff10",
    };
  },
  components: {
    Timeline,
    ModalTravel,
  },
};
</script>

<style lang="scss" scoped>
.imagenTravel {
  height: 450px;
  .tituloTravel {
    padding: 150px 0px;
    font-size: 150px;
  }
}
</style>

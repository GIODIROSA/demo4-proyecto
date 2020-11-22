<template>
  <div class="py-3">
    <ImagenContacto />

    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title class="tituloContacto blue-grey lighten-4">
              CONSULTAS GENERALES
            </v-card-title>
            <v-card-text class="text-justify my-5">
              Si no puede encontrar su respuesta en nuestra página de preguntas
              frecuentes, envíe un correo electrónico a cualquier consulta
              general Correo electrónico: info@aufields.cl Para cualquier
              pregunta relacionada con sus boletos, comuníquese con su agente de
              boletos. Se puede encontrar una lista de contactos de servicio al
              cliente de los agentes de venta de entradas oficiales en la parte
              inferior de la página de Entradas.
            </v-card-text>
            <v-divider></v-divider>
            <v-card-title class="tituloContacto blue-grey lighten-4">
              RESIDENTES
            </v-card-title>
            <v-card-text class="text-justify my-5">
              Para cualquier consulta de los residentes, envíe un correo
              electrónico a resident@aufields.cl
            </v-card-text>
            <v-divider></v-divider>
            <v-card-title class="tituloContacto blue-grey lighten-4">
              ACCESO PARA DISCAPACITADOS Y MEDICACIÓN
            </v-card-title>
            <v-card-text class="text-justify my-5">
              Si tiene alguna pregunta relacionada con el acceso para
              discapacitados y / o desea registrarse en el programa, o si tiene
              preguntas sobre la entrada de medicamentos al evento, comuníquese
              con el equipo de acceso en access@aufields.cl o llame al 0207009
              3490.
            </v-card-text>
            <v-divider></v-divider>
            <v-card-title class="tituloContacto blue-grey lighten-4">
              COMERCIANTES DE FESTIVALES
            </v-card-title>
            <v-card-text class="text-justify my-5">
              Concesiones no alimentarias: - Si está interesado en operar un
              concesión (no alimentaria solamente) en Creamfields, póngase en
              contacto con Lyndsey Doel @ 5D Events, correo electrónico:
              info@5dcuk.com para más información Concesiones de alimentos: - Si
              está interesado en operar un concesión en AUFIELDS, comuníquese
              con Beth Greaves @ D&J Catering, correo electrónico:
              beth@djcatering.cl / Tel: 0116247 8177
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
export default {
  name: "Contacto",
  data: () => ({}),

  methods: {},
  components: {
    ImagenContacto,
  },
};
</script>

<style lang="scss" scoped>
.tituloContacto {
  color: #bdbdbd;
}
</style>

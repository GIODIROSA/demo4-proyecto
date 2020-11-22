<template>
  <div class="py-3">
    <ImagenFormulario />

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
import ImagenFormulario from "@/components/contacto/ImagenFormulario.vue";
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: [
      "Problema con tu ticket",
      "Duda el día del evento",
      "Tienes algún problema en como llegar",
      "¿Quieres reembolsar tu ticket?",
    ],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  }, //final de data
  components: {
    ImagenFormulario,
  },
};
</script>

<style lang="scss" scoped>
.tituloFormulario {
  font-size: 30px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: #81d4fa;
}
.subtituloFormulario {
  text-align: center;
  color: #bdbdbd;
}
.tituloContacto {
  color: #bdbdbd;
}
</style>

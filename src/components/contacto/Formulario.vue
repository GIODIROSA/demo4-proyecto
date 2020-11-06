<template>
  <div class="py-3">
    <ImagenFormulario />

    <v-container>
      <h1 class="tituloFormulario">
        Formulario
      </h1>
      <h5 class="subtituloFormulario text-subtitle font-weight-light">
        Nos preocupamos por ti, podemos ayudarte
      </h5>
      <v-row>
        <v-col>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Nombre"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-select
              v-model="select"
              :items="items"
              :rules="[(v) => !!v || 'Item is required']"
              label="¿En qué te podemos ayudar?"
              required
            ></v-select>

            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || 'You must agree to continue!']"
              label="¿Están correcto todos tus datos?"
              required
            ></v-checkbox>

            <v-btn
              dark
              :disabled="!valid"
              color="light-blue accent-2"
              class="mr-4"
              @click="validate"
            >
              <v-icon>mdi-alert-circle-check-outline</v-icon>
              correcto
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
              borrar
            </v-btn>

            <v-btn dark color="light-green lighten-2" @click="resetValidation">
              borrar validación
            </v-btn>
          </v-form>
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
</style>

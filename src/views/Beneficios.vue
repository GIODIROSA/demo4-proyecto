<template>
  <div>
    <BeneficiosAuf :contenidos="contenidos" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BeneficiosAuf from "@/components/beneficios/BeneficiosAuf.vue";
export default {
  name: "Beneficios",
  components: {
    BeneficiosAuf,
  },
  computed: {
    ...mapState("Contenidos", ["contenidos"]),
  },
};
</script>

<style></style>

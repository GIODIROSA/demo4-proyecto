<template>
  <div>
    <BeneficiosAuf :beneficios= "beneficios"  />
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
    ...mapState("Beneficios", ["beneficios"]),

  },
};
</script>

<style></style>

<template>
<!-- TABLA DE BENEFICIOS Y BONOFICACION -->
  <v-container>
    <v-row>
      <v-col>
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="ticket text-left py-2">
                  Ticket
                </th>
                <th class="abono text-left py-2">
                  Abono UPG
                </th>
                <th class="abono text-left py-2">
                  Abono Tokens/barra
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in Precios" :key="item.area">
                <td class="itemArea text-lg-h6 deep-purple lighten-5">
                  {{ item.area }}
                </td>
                <td class="itemPrecio text-lg-h6 deep-purple lighten-5">
                  $ {{ item.precio }}
                </td>
                <td class="itemVipDeck text-lg-h6 deep-purple lighten-5">
                  $ {{ item.vipDeck }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TablaBeneficios",
  data() {
    return {
      Precios: [
        {
          area: "General",
          precio: 5000,
          vipDeck: 10000,
        },
        {
          area: "Hospitaly",
          precio: 7500,
          vipDeck: 10000,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.itemArea {
  color: #7c4dff;
}
.itemPrecio {
  color: #ff1744;
}
.itemVipDeck {
  color: #CDDC39;
}
</style>

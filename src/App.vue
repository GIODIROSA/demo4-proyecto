<template>
  <v-app>
    <BaseNavbar2 />

    <v-main>
      <router-view />
    </v-main>
    <BaseFooter />
  </v-app>
</template>

<script>

export default {
  name: "App",

  data: () => ({
  
    //
  }),
  
};
</script>

<style lang="scss" >


</style>

<template>
  <div>
    <div class="bannerTravel">
      <img class="imagenTravel" src="../assets/img/mascara01.png" alt="" />
    </div>
    <Timeline />
  </div>
</template>

<script>
import Timeline from "@/components/travel/Timeline.vue";
export default {
  components: {
    Timeline,
  },
};
</script>

<style lang="scss" scoped>
.bannerTravel {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 650px;
  max-width: 100%;
  background-image: url("../assets/img/alchemy.gif");
  background-repeat: repeat-x;
  background-attachment: fixed;
  .imagenTravel {
    height: 650px;
  }
  .tituloTravel {
    padding: 150px 0px;
    font-size: 150px;
  }
}
</style>

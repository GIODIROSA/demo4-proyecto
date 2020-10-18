<template>
  <div>
    <section>
      <div class="bannerTickets">
        <img class="imgbanner" src="../assets/img/tickets02.png" alt="" />
      </div>
    </section>
    <BaseTickets />
    
  </div>
</template>

<script>

export default {
  name: "Tickets",
  data() {
    return {
     
    };
  },

};
</script>

<style lang="scss" scoped>
.bannerTickets {
  background-image: url("../assets/img/bannertickets01.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgbanner {
  padding: 150px;
  width: 750px;
  height: 850px;
}
.pr{
  width: 750px;
  height: 750px;
  background: red;
}
</style>

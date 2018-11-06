<template>
  <div class="listMenu">
    <div class="container" @click="toGoodList()">
      <img src="../assets/images/menu.png" alt="">
      <p>菜单</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "listMenu",
    data () {
      return {

      }
    },
    methods: {
      toGoodList() {
        this.$router.push('goodlist')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 4.4rem;
    height: 4.4rem;
    background: #000000;
    color: #ffffff;
    position: fixed;
    z-index: 1;
    bottom: .5rem;
    left: 50%;
    margin-left: -2.2rem;
    border-radius: 50%;
    text-align: center;
    img {
      width: 1.8rem;
      height: 1.8rem;
      margin-top: .4rem;
    }
    p {
      position: relative;
      top: -.2rem;
    }
  }
</style>


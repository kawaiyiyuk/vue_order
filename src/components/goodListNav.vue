<template>
  <div class="good_list_nav">
    <div class="wrap">
      <ul class="list">
        <li @click="navFlag = !navFlag">
          <img src="../assets/images/navigation.png" alt="">
          <p>导航</p>
        </li>
        <li>
          <img src="../assets/images/menu.png" alt="">
          <p>菜单</p>
        </li>
        <li>
          <img src="../assets/images/cart.png" alt="">
          <p>购物车</p>
        </li>
        <li>
          <img src="../assets/images/order.png" alt="">
          <p>我的订单</p>
        </li>
        <li>
          <img src="../assets/images/wallet.png" alt="">
          <p>结账</p>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
    export default {
      name: "goodListNav",
      props:['navFlag'],
      data () {
        return {

        }
      }
    }
</script>

<style lang="scss" scoped>
  .good_list_nav {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.6);
    .list {
      li {
        width: 4.4rem;
        height: 4.4rem;
        background-color: #000000;
        color: #ffffff;
        text-align: center;
        border-radius: 50%;
        &:nth-child(1) {
          position: fixed;
          bottom: .5rem;
          left: .5rem ;
        }
        &:nth-child(2) {
          position: fixed;
          bottom: 15.4rem;
          left: .5rem ;
        }
        &:nth-child(3) {
          position: fixed;
          bottom: 12.4rem;
          left: 30% ;
          margin-left: -2.2rem;
        }
        &:nth-child(4) {
          position: fixed;
          bottom: 7.5rem;
          left: 45%;
          margin-left: -2.2rem;
        }
        &:nth-child(5) {
          position: fixed;
          bottom: .5rem;
          left: 50%;
          margin-left: -2.2rem;
        }
        img {
          width: 1.8rem;
          height: 1.8rem;
          margin-top: .4rem;
        }
        p {
          position: relative;
          top: -.2rem;
          font-size: 1rem;
        }
      }

    }
  }
</style>

<template>
  <div class="shoppingCart">
    <div class="wrap" @click="to_order">
      <img src="../assets/images/cart.png" alt="">
      <p>购物车</p>
      <div class="cart_num">
        <span>{{totalNum}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['totalNum'],
    name: "ShoppingCart",
    data () {
      return {
        cartNum:null
      }
    },
    methods: {
      to_order () {
        this.$router.push ('/cart')
      },
      getCartNum () {

         this.$http.get('api/'+'api/cartCount?uid=a002').then((res) => {
           this.cartNum = res.data.result;
           // console.log(res,11)
         })
      }
    },
    computed: {

    },
    mounted () {
      this.getCartNum()
    }
  }
</script>

<style lang="scss" scoped>
  .shoppingCart {
    .wrap {
      width: 4.4rem;
      height: 4.4rem;
      background: red;
      color: #ffffff;
      position: fixed;
      z-index: 1;
      bottom: .5rem;
      right: .5rem;
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
      .cart_num {
        position: absolute;
        top: -.7rem;
        right: -.5rem;
        span {
          display: inline-block;
          width: 2rem;
          height: 2rem;
          line-height: 2rem;
          text-align: center;
          border-radius: 50%;
          background-color: red;
        }
      }
    }

  }
</style>

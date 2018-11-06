<template>
  <div class="order_pay">
    <div class="already_order_top">
      <h3>已下单的菜</h3>
      <div class="top_detail">
        <div class="d_num">
          桌号001
        </div>
        <div class="p_num">
          人数：2
        </div>
        <div class="order_time">
          下单时间16:25
        </div>
      </div>
      <div class="order_pay_info">
        <div class="price_lsit">
          应付金额
          <span>￥60</span>
        </div>
        <div class="pay_button">
          <button>立即付款</button>
        </div>
      </div>
    </div>
    <div class="already_order_bottom">
      <h3>菜品详情：</h3>
      <ul class="list">
        <li class="list_item">
          <p class="title">烧茄子</p>
          <p class="num">1份</p>
          <p class="price">12元</p>
        </li>
        <li class="list_item">
          <p class="title">红烧鸡块</p>
          <p class="num">1份</p>
          <p class="price">18.00元</p>
        </li>
        <li class="list_item">
          <p class="title">香米饭</p>
          <p class="num">1份</p>
          <p class="price">2.0元</p>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: "orderPay",
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .order_pay {
    padding: 1rem;
    .already_order_top {
      background-color: #ffffff;
      border-radius: .5rem;
      h3 {
        padding: 2rem 0 .5rem;
        font-size: 2rem;
        text-align: center;
      }
      .top_detail {
        display: flex;
        border-bottom: 1px solid #eeeeee;
        padding: .5rem;
        line-height: 2;
        div {
          width: 33%;
        }
      }
      .order_pay_info {
        margin: 1rem 0;
        line-height: 2;
        padding: .5rem .5rem 1rem .5rem;
        display: flex;
        .price_lsit {
          flex: 1;
          span {
            color: red;
            font-size: 2rem;
          }
        }
        .pay_button {
          position: relative;
          top: .5rem;
          button {
            width: 10rem;
            height: 2.6rem;
            color: #ffffff;
            background-color: red;
            border-radius: .5rem;
            text-align: center;
            border: none;
          }

        }
      }
    }
    .already_order_bottom {
      border-radius: .5rem;
      background-color: #ffffff;
      margin-top: 1rem;
      padding: .5rem;
      h3 {
        line-height: 2;
      }
      .list {
        .list_item {
          line-height: 2;
          display: flex;
          padding: .5rem 0;
          .title {
            flex: 2;
          }
          .num {
            flex: 1;
            text-align: center;
          }
          .price {
            flex: 1;
            text-align: center;
          }
        }
      }
    }
  }
</style>

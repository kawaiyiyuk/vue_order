<template>
  <div class="already_order">
    <div class="already_order_top">
      <div class="top">
        <div class="top_img">
          <img src="../assets/images/timer.png" alt="">
        </div>
        <div class="top_info">
          <h2>118号桌待门店接单</h2>
          <p>请及时联系服务员确认一点菜品信息!</p>
        </div>
      </div>
      <div class="bottom">
        <h3>已点菜品6份,合计 : <span>60元</span></h3>
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
    name: "order",
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .already_order {
    padding: 1rem;
    .already_order_top {
      background-color: #ffffff;
      border-radius: .5rem;
      .top {
        display: flex;
        .top_img {
          img{
            width: 5.6rem;
            height: 5.6rem;
          }
        }
        .top_info {
          padding-top: .5rem;
        }
      }
      .bottom {
        line-height: 2;
        padding: .5rem;
        h3 {
          span {
            color: red;
            font-size: 2rem;
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

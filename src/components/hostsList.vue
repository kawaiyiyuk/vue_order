<template>
  <div class="hosts_list">
    <h2 class="title">
      本店热销
    </h2>
    <ul class="list_main">
      <li class="list_main-item clearfix" v-for="(item,index) in listData">
        <div class="main_left">
          <img :src='item.src' alt="">
        </div>
        <div class="main_right">
          <p class="item_title">{{item.title}}</p>
          <p class="item_price">￥{{item.price}}</p>
          <p class="item_sold">已售:{{item.sold}}份</p>
        </div>
      </li>
    </ul>
    <shoppingCar></shoppingCar>
    <myMenu></myMenu>

  </div>
</template>

<script>
  import shoppingCar from './shoppingCart'
  import goodListNav from './goodListNav'
  import myMenu from './listMenu'
  export default {
    name: "hostsList",
    data () {
      return {
        listData :[
          {
            src:require('../assets/images/1.jpeg'),
            title:'大蒜腊肉',
            price:26,
            sold:221
          },
          {
            src:require('../assets/images/2.jpeg'),
            title:'炒白菜',
            price:22,
            sold:231
          },
          {
            src:require('../assets/images/3.jpeg'),
            title:'娃娃菜炖豆腐',
            price:89,
            sold:455
          },
          {
            src:require('../assets/images/4.jpeg'),
            title:'芒果汁',
            price:17,
            sold:666
          },
          {
            src:require('../assets/images/5.jpeg'),
            title:'套餐',
            price:89,
            sold:898
          },
          {
            src:require('../assets/images/6.jpeg'),
            title:'大饼',
            price:15,
            sold:1025
          },
          {
            src:require('../assets/images/7.jpeg'),
            title:'麻辣香锅',
            price:80,
            sold:2200
          }

        ]
      }
    },
    components: {
      shoppingCar,
      goodListNav,
      myMenu
    }
  }
</script>

<style lang="scss" scoped>
  .hosts_list {
    .title {
      height: 5rem;
      line-height: 5rem;
      text-align: center;
      font-size: 1.5rem;
      color: #555555;
    }
    .list_main {
      padding: 0 .5rem;
      .list_main-item {
        width: 100%;
        box-sizing: border-box;
        padding: 1rem 0;
        border-bottom: 1px solid #eeeeee;
        background-color: #ffffff;
        .main_left {
          float: left;
          img {
            width: 6rem;
            height: 6rem;
          }
        }
        .main_right {
          height: 6rem;
          float: left;
          margin-left: 1rem;
          display: flex;
          flex-wrap: wrap;
          flex-direction:column;
          justify-content: center;
          p {
            width: 100%;
            height: 1.8rem;
          }
          .item_title {
            font-size: 1.4rem;
            font-weight: 600;
          }
        }
      }
    }
  }
</style>

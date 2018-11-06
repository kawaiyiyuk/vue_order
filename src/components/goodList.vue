<template>
  <div class="good-list">
    <div class="good-list-header">
      <ul class="header-list">
        <li class="header-list-item">
          <img src="../assets/images/rexiao.png" alt="">
          <p>热销榜</p>
        </li>
        <li class="header-list-item">
          <img src="../assets/images/caidan.png" alt="">
          <p>点过的菜</p>
        </li>
        <li class="header-list-item">
          <img src="../assets/images/sousuo.png" alt="">
          <p>搜你喜欢</p>
        </li>
      </ul>
    </div>
    <div class="good-content">
      <ul class="good-content-list">

        <li class="business" v-for="(item,index) in goodData">
          <h2 class="business_title">{{item.title}}</h2>
          <ol class="classification">
              <li  v-for="(item2,index) in item.list" @click="link_to_content(item2._id)">
                <div class="food-wrap">
                  <img :src="'http://a.itying.com/'+item2.img_url" alt="">
                  <p class="item-title">{{item2.title}}</p>
                  <p class="item-price">￥{{item2.price}}</p>
                </div>
                <p></p>
              </li>


          </ol>
        </li>
      </ul>
    </div>
    <div class="asilder" :class="{asilder_show:asilderFlag}">
      <ul>
        <li v-for="(item,index) in goodData" @click="slideTo(index)">
          {{item.title}}
        </li>
      </ul>
      <div @click="asilderFlag = !asilderFlag"  class="s_switch">
        <div>
          <img src="../assets/images/nav.png" alt="">
          <p>菜单</p>
        </div>
      </div>
    </div>
    <div v-if="!asilderFlag" class="mask" @click="asilderFlag = !asilderFlag"></div>
    <div class="good_list_nav_one" v-if="!navFlag" @click="navFlag = !navFlag" >
      <img src="../assets/images/navigation.png" alt="">
      <p>导航</p>
    </div>
    <div v-if="navFlag" class="good_list_nav">
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
    <shoppingCart></shoppingCart>
  </div>
</template>

<script>
  import goodListNav from './goodListNav'
  import shoppingCart from './shoppingCart'
  export default {
    name: "goodList",
    data () {
        return {
          goodData:[],
          classificationData:[],
          asilderFlag:true,
          navFlag:false
        }
    },
    methods: {
      asildershow () {
      },
      link_to_content  (cate_id) {
        this.$router.push('pcontent'+'?id='+cate_id)
      },
      getFoodData () {//获取菜品数据
        this.$http.get('api/api/productlist',{}).then((res,req) => {
          this.goodData = res.data.result;
          console.log(res.data.result)
        })
      },
      slideTo (index) {
        let scrollTopDom = document.querySelectorAll('.business_title');
        document.documentElement.scrollTop = scrollTopDom[index].offsetTop;
        this.asilderFlag = true
      }
    },
    mounted () {
      this.getFoodData()
    },
    components:{goodListNav,shoppingCart}
  }
</script>

<style lang="scss" scoped>
  .good-list {
    .good-list-header {
      .header-list {
        width: 96%;
        height: 4.4rem;
        background-color: #ffffff;
        margin: 1rem auto 0;
        display: flex;
        .header-list-item {
          flex: 1;
          text-align: center;
          padding-top: .2rem;
          border-right: 1px solid #eeeeee;
          img{
            width: 2rem;
            height: 2rem;
          }
          &:last-child {
            border-right: none;
          }
        }
      }
    }
    .good-content-list {
      padding: 0 .5rem;
      transition: all 1s;
      .business {
        h2 {
          text-align: center;
          font-size: 1.4rem;
          padding: .5rem;
        }
        .classification {
          display: flex;
          flex-wrap: wrap;

            li {
              width: 33%;
              padding: .5rem;
              box-sizing: border-box;
              .food-wrap {
                border-radius: .5rem;
                background-color: #ffffff;
                padding-bottom: .5rem;
                img {
                  width: 100%;
                  border-radius: .5rem;
                }
                p {
                  padding-left: .5rem;
                }
                p.item-title {
                  font-weight: bold;
                }
              }
            }



        }
      }
    }
    .asilder {
      position: fixed;
      top: 0;
      left: 0;
      width: 6rem;
      height: 100%;
      background: #eee;
      transition: all 1s;
      z-index: 2; //遮罩层的z-index 是1

      ul{
        padding: .5rem;
        background: #eeeeee;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        height: 100%;
        li{
          height: 4.4rem;
          line-height: 4.4rem;
        }
      }
      .s_switch {
        z-index: 2;
        width: 5rem;
        height: 4rem;
        text-align: center;
        position: absolute;
        left: 5rem;
        border-radius: 0 50% 50% 0;
        background: rgba(132, 128, 128, 0.9);
        top: 42%;
        img {
          width: 1.8rem;
          height: 1.8rem;
          margin-top: .5rem;
        }
        p{
          color: #ffffff;
          position: relative;
          bottom: .5rem;
        }
      }
    }
    .asilder_show {
      transform: translate(-100%,0);
    }
    .mask {
      z-index: 1;
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      background-color: rgba(132, 128, 128, 0.9);
    }
    .good_list_nav_one {
        width: 4.4rem;
        height: 4.4rem;
        background-color: #000000;
        color: #ffffff;
        text-align: center;
        border-radius: 50%;
        position: fixed;
        bottom: .5rem;
        left: .5rem ;

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
  }
</style>

<template>
  <div class="cart_container">
    <div class="info">
      <h2>购物车</h2>
      <div class="p_number clearfix">
        <div class="p_number_left">
          <p >用餐人数:{{peopleInfo.p_num}}</p>
          <p>备注：{{peopleInfo.p_mark}}</p>
        </div>
        <div  @click="modifyInfo" class="p_number_right">
          <img src="../assets/images/edit.png" alt="">
          <p>修改</p>
        </div>
      </div>
      <div class="cart_p_num">
        <p>购物车里共有{{totalNum}}个菜</p>
        <p>合计：<span>¥{{allCartNum}}</span></p>
      </div>
    </div>
    <div v-if="totalNum > 0" class="car_list">
      <ul>
        <li v-for="(item,index) in list" class="car_list_item clearfix">
          <div class="item_left">
            <div class="item_left_img">
              <img :src="'http://a.itying.com/'+item.img_url" alt="">
            </div>
            <div class="item_left_text">
              <p>{{item.title}}</p>
              <p>￥{{item.price}}</p>
            </div>
          </div>
          <div class="item_right">
            <div class="cart_num">
              <div class="input_right">
                <button @click="desNum(item,index)">-</button>
              </div>
              <div class="input_center">
                <input type="text" v-model="item.num">
              </div>
              <div class="input_left">
                <button @click="addNum(item,index)">+</button>
              </div>

            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="totalNum <= 0" class="tip_empty">
      <h2>您的购物车空空如也，请点击菜单点餐</h2>
    </div>
    <div class="hoot_food">
      <h2>本店顾客最常点的菜</h2>
      <div class="hoot_food_list_wrap">
        <ul class="hoot_food_list">
          <li class="hoot_food_item">
            <div class="inner">
              <img src="../assets/images/1.jpeg" alt="">
              <p>南瓜粥</p>
              <p>￥26</p>
            </div>
          </li>
          <li class="hoot_food_item">
            <div class="inner">
              <img src="../assets/images/2.jpeg" alt="">
              <p>南瓜粥</p>
              <p>￥26</p>
            </div>
          </li>
          <li class="hoot_food_item">
            <div class="inner">
              <img src="../assets/images/3.jpeg" alt="">
              <p>南瓜粥</p>
              <p>￥26</p>
            </div>
          </li>
          <li class="hoot_food_item">
            <div class="inner">
              <img src="../assets/images/4.jpeg" alt="">
              <p>南瓜粥</p>
              <p>￥26</p>
            </div>
          </li>
          <li class="hoot_food_item">
            <div class="inner">
              <img src="../assets/images/5.jpeg" alt="">
              <p>南瓜粥</p>
              <p>￥26</p>
            </div>
          </li>
          <li class="hoot_food_item">
            <div class="inner">
              <img src="../assets/images/6.jpeg" alt="">
              <p>南瓜粥</p>
              <p>￥26</p>
            </div>
          </li>
        </ul>
      </div>

    </div>
    <shoppingCar :cartNum="totalNum"></shoppingCar>
    <myMenu></myMenu>
  </div>
</template>

<script>
  import shoppingCar from './shoppingCart'
  import goodListNav from './goodListNav'
  import myMenu from './listMenu'
  export default {
    name: "cart",
    data () {
      return {
        list:[],
        peopleInfo:{}
      }
    },
    methods: {
      getData () {
        this.$http.get('/api'+'/api/cartlist?uid=a002').then((res) => {
          this.list = res.data.result;
        })
      },
      desNum (item,index) {
        if(item.num == 1){

          this.$http.get('/api'+'/api/decCart?uid=a002'+'&product_id=' +item.product_id+ '&num='+item.num )
            .then((res) => {
              console.log(res)
              // this.list = res.data.result
            }).catch((err) => {
            console.log(err)
          });
          this.list.splice(index,1);
        }else {
          this.$http.get('/api'+'/api/decCart?uid=a002'+'&product_id=' +item.product_id+ '&num='+item.num )
            .then((res) => {
              console.log(res)
              // this.list = res.data.result
            }).catch((err) => {
              console.log(err)
          });
          item.num --;  //注意这块需要先拿数据 数据拿到以后 再进行视图的更改，否则的话 每次先更改数据，但是视图没更改，会多减一次
        }
      },
      addNum (item,index) {
        this.$http.get('/api'+'/api/incCart?uid=a002'+'&product_id=' +item.product_id+ '&num='+item.num )
          .then((res) => {
           // this.list = res.data.result
          }).catch((err) => {
          console.log(err)
        });
        item.num ++ //跟上面一样的是 先拿数据 再进行增加
      },
      //获取用餐信息
      getPeoplelInfo () {
        this.$http.get('/api'+'/api/peopleInfoList?uid=a002')
          .then((res) => {
            this.peopleInfo = res.data.result[0];
            console.log(res.data.result[0])
          })
      },
      modifyInfo () {
        this.$router.push('editpeopleinfo')
      }
    },
    computed: {
      //购物车价格总和
      allCartNum () {
        let allCartNum = 0;
        for (let i =0 ; i< this.list.length ; i++) {
          //这个地方用的是计算属性，没有用方法来计算价格，所以再更改数量的时候 是可以自行调用的
          //注意这个地方， 在初始化list的时候 不能为null 必须为一个空的数组，否则list.length是无法找到的
          allCartNum += parseFloat(this.list[i].price * this.list[i].num)
        }
        return allCartNum
      },
      //购物车菜品总数量
      totalNum () {
        let totalNum = 0;
        for (let i =0 ; i< this.list.length ; i++) {
          //注意这个地方， 在初始化list的时候 不能为null 必须为一个空的数组，否则list.length是无法找到的
          totalNum += parseFloat(this.list[i].num)
        }
        return totalNum
      }
    },
    mounted () {
      this.getData()
      this.getPeoplelInfo()
    },
    components: {
      shoppingCar,
      goodListNav,
      myMenu
    }
  }
</script>

<style lang="scss" scoped>
  .cart_container {
    padding: 1rem;
    .info {
      padding: .5rem;
      background-color: #ffffff;
      border-radius: .5rem;
      h2 {
        text-align: center;
        font-size: 1.8rem;
        font-weight: 600;
        padding: .8rem 0;
        border-bottom: 1px solid #eeeeee;
      }
      .p_number {
        padding: .5rem 0;
        border-bottom: 1px solid #eeeeee;
        .p_number_left {
          float: left;
          line-height: 2;
          p {
            &:first-child {
              color: red;
            }
          }

        }
        .p_number_right {
          width: 4rem;
          height: 4rem;
          text-align: center;
          float: right;
          img {
            width: 1.8rem;
            height: 1.8rem;
          }
        }
      }
      .cart_p_num {
        border-bottom: 1px solid #eeeeee;
        p {
          line-height: 2;
          span {
            font-size: 2.4rem;
            color: red;
          }
        }
      }
    }
    .car_list {
      margin-top: 1rem;
      padding: .5rem;
      background-color: #ffffff;
      border-radius: .5rem;
      display: flex;
      ul {
        width: 100%;
        .car_list_item {
          display: flex;
          width: 100%;
          border-bottom: 1px solid #eeeeee;
          padding: 1rem 0;
          .item_left{
            float: left;
            display: flex;
            flex: 1;
            .item_left_img {

              img {
                width: 4rem;
                height: 4rem;
              }
            }
            .item_left_text {
              margin-left: .5rem;
              p {

              }
            }
          }
          .item_right {
            float: right;
            .cart_num {
              display: flex;
              width: 10rem;
              margin-top: .2rem;
              margin-left: 1rem;
              div {
                width: 33%;
                vertical-align: middle;
              }
              .input_left , .input_right{
                button {
                  width: 3.3rem;
                  height: 2.9rem;
                  background-color: #ffffff;
                  border: 1px solid #eeeeee;
                  color: red;
                  font-size: 2rem;
                }
              }
              .input_center {
                input {
                  width: 100%;
                  height: 2.9rem;
                  border: none;
                  text-align: center;
                  border-top: 1px solid #eeeeee;
                  border-bottom: 1px solid #eeeeee;
                  position: relative;
                  top: 0;
                  box-sizing: border-box;
                }
              }
            }
          }
        }
      }
    }
    .hoot_food {
      padding: .5rem;
      background-color: #ffffff;
      border-radius: .5rem;
      margin-top: 1rem;
      margin-bottom: 4rem;
      h2 {
        font-size: 1.4rem;
        padding: .5rem 0;
      }
      .hoot_food_list_wrap {
        width: 100%;
        overflow-x: auto;
        .hoot_food_list {
          padding: 0 .5rem;
          width: 50rem;
          height: 12rem;
          .hoot_food_item {
            width: 8rem;
            padding: .5rem;
            box-sizing: border-box;
            float: left;
            .inner {
              background-color: #ffffff;
              width: 100%;

              img {
                width: 100%;
                border-radius: .5rem;
              }
              p {}
            }


          }
        }
      }
    }
    .tip_empty {
      text-align: center;
      height: 3rem;
      line-height: 3rem;
      margin-top: 2rem;
    }
  }
</style>


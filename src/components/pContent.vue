<template>
  <div class="p_content">
    <div class="content_header">
      <div class="header_img">
        <img :src="imgUrl" alt="">
      </div>
      <h2 class="header_title">{{headerTitle}}</h2>
      <p class="header_price">￥{{headerPrice}}/份</p>
    </div>
    <div class="content_main">
      <h4>商品详情</h4>
      <div class="main_img">
        <img :src="imgUrl" alt="">
        <div class="describe" v-html="headerContent">
        </div>
      </div>

    </div>
    <div class="content_foot clearfix">
      <div class="foot_letf">
        <span>
          数量
        </span>

        <div class="cart_num">
          <div class="input_right">
            <button @click="subNum()">-</button>
          </div>
          <div class="input_center">
            <input type="text" v-model="foodNum">
          </div>
          <div class="input_left">
            <button @click="addNum()">+</button>
          </div>
        </div>
      </div>
      <div class="foot_ritht" @click="cartData">
        <button>加入购物车</button>
      </div>
    </div>
    <div class="back" @click="goBack">
      返回
    </div>
  </div>
</template>

<script>
    export default {
      name: "pContent",
      data () {
        return {
          foodContent:null,
          imgUrl:null,
          headerTitle:null,
          headerPrice:null,
          headerContent:null,
          foodNum:1,
          list:null
        }
      },
      methods: {
        goBack () {
          this.$router.go(-1)
        },
        getContentData (id) {
          this.$http.get('api'+'/api/productcontent?id='+ id).then((res) => {
            console.log(res)
            this.foodContent = res.data
            this.imgUrl = 'http://a.itying.com/'+  res.data.result[0].img_url;
            this.list = res.data.result[0];
            this.headerTitle = res.data.result[0].title;
            this.headerPrice = res.data.result[0].price;
            this.headerContent = res.data.result[0].content;
            console.log( this.list)
          })
        },
        addNum(){
          this.foodNum ++
        },
        subNum(){
          if(this.foodNum >1) {
            this.foodNum --
          }
        },
        cartData () {
          this.$http.post('api/'+'/api/addcart',{
            'uid':'a002',
            title:this.headerTitle,
            price:this.headerPrice,
            num:this.foodNum,
            product_id:this.list._id,
            img_url:this.list.img_url,

          }).then((res) => {
            if(res.data.success) {
              this.$router.push({path:'goodlist'});
              console.log(res)
            }
          })
        }
      },
      mounted () {
        //console.log(this.$route.params) //动态路由
        //console.log(this.$route.query) //get传值 这两种都可以传递router的数据
        console.log(this.$route.query.id)
        this.getContentData(this.$route.query.id)
      }
    }
</script>

<style lang="scss" scoped>
  .p_content {
    .content_header {
      background-color: #ffffff;
      .header_img {
        img {
          max-width: 100%;
        }
      }
      p,h2 {
        padding:  .2rem .5rem;
      }
      h2 {
        color: #555555;
        font-size: 1.5rem;
      }
      p {
        color: red;
      }
    }
    .content_main {
      background-color: #ffffff;
      margin-top: 1rem;
      h4 {
        padding: .5rem;
        font-size: 1.5rem;
      }
      .main_img {
        padding: 1rem 1rem 5rem 1rem;
        box-sizing: border-box;
        img {
          max-width: 100%;
        }
        .describe {
          p {
            margin-bottom: 1rem;
          }
        }
      }
    }
    .content_foot {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 4.4rem;
      line-height: 4.4rem;
      background-color: #ffffff;
      border-top: 1px solid #eeeeee;
      .foot_letf {
        display: flex;
        float: left;
        padding-left: 1rem;

        span {
          display: inline-block;
          width: 2.8rem;
          font-size: 1.4rem;
        }
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
              top: -.12rem;
              box-sizing: border-box;
            }
          }
        }
      }
      .foot_ritht {
        float: right;
        button {
          background-color: red;
          color: #ffffff;
          height: 3rem;
          border: none;
          padding: 0 .5rem;
          margin-top: .2rem;
          margin-right: .5rem;
          border-radius: .5rem;
        }

      }
    }
    .back {
      width: 3.8rem;
      height: 3.8rem;
      line-height: 3.8rem;
      text-align: center;
      border-radius: 50%;
      position: fixed;
      top: .5rem;
      left: .5rem;
      background-color: #000000;
      color: #ffffff;
      &:before {
        content: '';
        display: block;
        width: .8rem;
        height: .8rem;
        border-left: .2rem solid #ffffff;
        border-bottom: .2rem solid #ffffff;
        float: left;
        transform: rotate(45deg);
        position: relative;
        top: 1.3rem;
        left: .6rem;
      }
    }
  }
</style>

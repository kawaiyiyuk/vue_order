<template>
    <div class="start">
      <div class="start_header">
          <img src="../assets/images/canju.png" alt="">
          <span>用餐人数</span>
        </div>
      <p>请选择正确的用餐人数 ，小二马上给你送餐具</p>
      <div class="start_content">
        <ul class="people_number">
          <li @click="changeActive(index)" :title="index" :class="{active:index == activeNum -1}" v-for="(item,index) in list">
            <span>{{item}}人</span>
          </li>
        </ul>
      </div>
      <div class="note_information">
        <input v-model="noteInformation" type="text" placeholder="请输入您的口味要求，忌口等（可不填）">
      </div>

      <div class="information_tip">
        <ul class="information_tip_list">
          <li :class="{active:index == activeTipNum}" @click="changeNote(item,index)" v-for="(item,index) in listTip" class="information_tip_item"><button>{{item}}</button></li>
        </ul>
      </div>
      <div class="start_button" @click="toGoodList()">
          开始点餐
      </div>
    </div>
</template>

<script>
    export default {
      name: "start",
      data () {
        return {
          list:['1','2','3','4','5','6','7','8','9','10','11','12'],
          listTip:['打包带走','不放辣','微辣'],
          activeNum:1, //默认为1 这样往后台传数据的时候 直接拿来用也行 或者在传数据的时候 在avtiveNum + 1
          activeTipNum:null,
          noteInformation:''
        }
      },
      methods: {
        changeActive(index){
          this.activeNum = index+1
        },
        changeNote (item,index) {
          this.activeTipNum = index
          this.noteInformation += ' ' + item
        },
        toGoodList () {
          this.$http.post('/api'+'/api/addPeopleInfo',{
            'uid':'a002',
            'p_num':this.activeNum,
            'p_mark':this.noteInformation

          })
            .then((res) => {
              console.log(res)
              if (res.data.success) {
                this.$router.push('goodlist')
              }
            })
            .catch((err) => {
              console.log(err)
            })
        }
      }
    }
</script>

<style lang="scss" scoped>
  .start {

    .start_header {
      width: 10rem;
      height: 3.2rem;
      line-height: 3.2rem;
      background: #000000;
      margin: 5rem auto 0;
      border-radius: .5rem;
      color: #ffffff;
      img{
        height: 2.2rem;
        line-height: 2.2rem;
        position: relative;
        top: .5rem;
        margin-left: 1rem;

      }

    }
    p{
      width: 100%;
      color: red;
      text-align: center;
      height: 3.2rem;
      line-height: 3.2rem;
    }
    .start_content {
      .people_number {
        display: flex;
        flex-wrap: wrap;
        padding: .5rem;
        li {
          box-sizing: border-box;
          width: 25%;
          text-align: center;
          padding: .5rem;
          span{
            display: block;
            width: 100%;
            height: 3.2rem;
            line-height: 3.2rem;
            border: 1px solid #ccc;
            border-radius: .5rem;
            background-color: #ffffff;
          }
        }
        li.active {
          span {
            background-color: red;
            color: #ffffff;
          }
        }
      }
    }
    .start_button {
      width: 6rem;
      height: 6rem;
      line-height: 6rem;
      background-color: red;

      text-align: center;
      border-radius: 50%;
      position: fixed;
      bottom: 3rem;
      left: 50%;
      margin-left: -3rem;
        color: #ffffff;
    }
    .note_information {
      padding: 1rem;
      input {
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        border: 1px solid #eeeeee;
        padding-left: 1rem;
        box-sizing: border-box;
      }
    }
    .information_tip {
      margin-top: 2rem;
      .information_tip_list {
        display: flex;
        flex-wrap: wrap;
        padding: .5rem;
        li {
          box-sizing: border-box;
          width: 25%;
          text-align: center;
          padding: .5rem;
          button{
            display: block;
            width: 100%;
            height: 3.2rem;
            line-height: 3.2rem;
            border: 1px solid #ccc;
            border-radius: .5rem;
            background-color: #ffffff;
          }
        }
        li.active {
          button {
            background-color: red;
            color: #ffffff;
          }
        }
      }

    }
  }

</style>

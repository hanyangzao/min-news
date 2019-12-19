<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
      <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <van-notice-bar
              :text="notice"
              :scrollable="true"
              color="#1989fa"
              background="#ecf9ff"
              left-icon="info-o"
      />
      <link-center></link-center>


  </div>
</template>

<script>
// @ is an alias to /src
import linkCenter from '@/components/linkCenter.vue'

export default {
  name: 'home',
  data(){
    return {
        notice:"这是一条通知信息，当通知信息超过一行时，滚动显示"
    }
  },
  components: {
      linkCenter
  }
}
</script>
<style scoped lang="less">
    .van-swipe{
        margin-bottom: 6px;
        .van-swipe-item{
            color: #fff;
            font-size: 20px;
            line-height: 150px;
            text-align: center;
            &:nth-child(odd){
                background-color: #66c6f2;
            }
            &:nth-child(even){
                background-color:#39a9ed;
            }
        }
    }
    .van-notice-bar{
        margin-bottom: 6px;
    }



</style>

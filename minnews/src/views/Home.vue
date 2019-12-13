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
              text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
              left-icon="volume-o"
              :scrollable="true"
      />
      <van-panel title="这是一条标题" desc="描述标题信息" status="测试">
          <div>主要内容</div>
          <div>主要内容</div>
          <div>主要内容</div>
          <div>主要内容</div>
          <div>主要内容</div>
          <div>主要内容</div>
          <div>主要内容</div>
          <div slot="footer">
              <van-button size="small">按钮</van-button>
              <van-button size="small" type="danger">按钮</van-button>
          </div>
      </van-panel>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return {

    }
  },
  components: {
    HelloWorld
  }
}
</script>
<style lang="less">
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
    .van-notice-bar{
        margin-top: 6px;
    }
  .van-panel{
      margin: 6px 0;
      .van-panel__content{
          padding: 10px 16px;
          font-size: 14px;
      }
      .van-panel__footer {
          text-align: right;
      }
  }

</style>

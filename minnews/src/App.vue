<template>
  <div id="app">
    <van-nav-bar
            title="标题"

    />

    <!--vant键盘测试-->
<!--    <van-button type="default" @touchstart.stop="show = true">默认按钮</van-button>-->
<!--    <van-number-keyboard-->
<!--            :show="show"-->
<!--            extra-key="."-->
<!--            close-button-text="完成"-->
<!--            @blur="show = false"-->
<!--            @input="onInput"-->
<!--            @delete="onDelete"-->
<!--    />-->
    <!--接口调用测试-->
<!--    <div class="weather">-->
<!--      <div class="title">天津天气：</div>-->
<!--      <div>天气：{{weather}}</div>-->
<!--      <div>温度：{{temp}}</div>-->
<!--      <div>风向：{{windDirection}}</div>-->
<!--    </div>-->



<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <router-view/>

<!--    tabbar测试-->
    <van-tabbar route>
      <van-tabbar-item
              replace
              to="/"
              icon="home-o"
      >
        首页
      </van-tabbar-item>
      <van-tabbar-item
              replace
              to="/about"
              icon="search"
      >
        关于
      </van-tabbar-item>
    </van-tabbar>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        show: false,
        weather:'--',
        temp:'--'
      }
    },
    methods:{
      onInput(value) {
        this.$toast(value);
      },
      onDelete() {
        this.$toast('删除');
      }
    },
    created() {
      var that=this;
      var url = 'https://www.mxnzp.com/api/weather/current/天津市';
      this.axios.get(url)
      .then(res => {
         var data=res.data.data;
         console.log(data);
         that.weather=data.weather;
         that.temp=data.temp;

      }, res => {
        // 错误回调
      })

    }
  }
</script>

<style lang="less">
html{
  background-color: #fafafa;
}
#app {
  font-size: 16px;
  .weather{
    margin: 20px auto;
  }
  .title{
    font-size: 24px;
    margin-bottom: 10px;
  }
}

</style>

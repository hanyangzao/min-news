<template>
  <div id="app">
    <van-nav-bar
            :title="title"
            :fixed="true"

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
    <div class="main has_title has_tabbar">
      <router-view/>
    </div>
<!--    tabbar测试-->
    <van-tabbar v-model="active"  @change="ontabbarChange">
      <van-tabbar-item
              icon="home-o"
      >
        首页
      </van-tabbar-item>
      <van-tabbar-item
              icon="user-o"
      >
        我的
      </van-tabbar-item>
    </van-tabbar>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        title:"首页",
        show: false,
        weather:'--',
        temp:'--',
        active: '',
      }
    },
    methods:{
      onInput(value) {
        this.$toast(value);
      },
      onDelete() {
        this.$toast('删除');
      },
      ontabbarChange(e){
        console.log(e);
        if (this.active === 0) {
          this.title="首页";
          this.$router.push({
            path: '/',
            replace: true
          })
        } else if (this.active === 1) {
          this.title="我的";
          this.$router.push({
            path: '/profile',
            replace: true
          })
        }
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

    },
    mounted () {
      // 判断当前页面是否为home或profile页面
      const CURRENTTABBAR = window.location.hash.split('/')[1]
      if (CURRENTTABBAR === '') {
        this.active = 0
      } else if (CURRENTTABBAR === 'profile') {
        this.active = 1
      }
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
  .has_title{
    margin-top: 46px;
  }
  .has_tabbar{
    margin-bottom: 50px;
  }
}

</style>

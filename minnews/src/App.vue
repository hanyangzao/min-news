<template>
  <div id="app">

    <!--vant键盘测试-->
    <van-button type="default" @touchstart.stop="show = true">默认按钮</van-button>
    <van-number-keyboard
            :show="show"
            extra-key="."
            close-button-text="完成"
            @blur="show = false"
            @input="onInput"
            @delete="onDelete"
    />
    <!--接口调用测试-->
    <div>信息：{{message}}</div>



    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        show: true,
        message:'--'
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
         that.message=data.weather;

      }, res => {
        // 错误回调
      })

    }
  }
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

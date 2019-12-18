<template>
  <div id="app">
      <keep-alive include="newsList">
          <router-view/>
      </keep-alive>

  </div>
</template>
<script>
  export default {

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

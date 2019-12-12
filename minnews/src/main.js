import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
//引入 amfe-flexible
import 'amfe-flexible'
//引入 axios
import axios from 'axios'
Vue.prototype.axios = axios
//引入 qs
import qs from 'qs'


Vue.config.productionTip = false

//引用全部vant组件
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入 全部vant
//import Vant from 'vant'
//import 'vant/lib/index.css'

//引入 amfe-flexible
import 'amfe-flexible'
//引入 axios
import axios from 'axios'
Vue.prototype.axios = axios
//引入 qs
import qs from 'qs'
//引入 lodash
import _ from 'lodash'
Vue.prototype._ = _;
//引入 animate.css
import animated from 'animate.css'


Vue.config.productionTip = false

//引用全部vant组件
//Vue.use(Vant);

//按需引用vant
import { NavBar,Button,Toast,NumberKeyboard,Tabbar,
        TabbarItem,Swipe,SwipeItem,NoticeBar,Panel, ContactCard,
        ContactList, ContactEdit,Grid, GridItem,Tab,Tabs,List,Cell,CellGroup,
        Image,Lazyload,Loading,Icon,ImagePreview,PullRefresh,Field, Tag

} from 'vant'
Vue.use(animated)
    .use(NavBar).use(Button).use(Toast).use(NumberKeyboard)
    .use(Tabbar).use(TabbarItem ).use(Swipe).use(SwipeItem)
    .use(NoticeBar).use(Panel).use(ContactCard)
    .use(ContactList).use(ContactEdit)
    .use(Grid).use(GridItem).use(Tab).use(Tabs).use(List).use(Cell).use(CellGroup).use(Image)
    .use(Lazyload).use(Loading).use(Icon).use(ImagePreview).use(PullRefresh).use(Field).use(Tag)

//覆盖vant样式
import './assets/css/resetVant.less'


//路由守卫
// router.beforeEach((to, from, next) => {
//     if(to.meta.title){
//         console.log(to.meta.title);
//     }
//     next();
// });


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

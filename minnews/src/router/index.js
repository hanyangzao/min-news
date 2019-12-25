import Vue from 'vue'
import VueRouter from 'vue-router'
import Tabs from '../views/Tabs.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Tabs,
    children:[
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/profile',
        name: 'profile',
        meta:{
          title:"我的"
        },
        //路由懒加载
        component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
      }
    ],

  },
  {//新闻
    path: '/News',
    component:()=>import(/* webpackChunkName: "about" */ '../views/News/newsList.vue')
  },
  {
    path: '/NewsDetail',
    component:()=>import(/* webpackChunkName: "about" */ '../views/News/newsDetail.vue')
  },
  {//垃圾分类
    path: '/Rubbish',
    component:()=>import(/* webpackChunkName: "about" */ '../views/Rubbish/Rubbish.vue')
  },
  {//历史今日
    path: '/todayHistory',
    component:()=>import(/* webpackChunkName: "about" */ '../views/todayHistory.vue')
  }
]

const router = new VueRouter({
  routes
})



export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Tabs from '../views/Tabs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Tabs,
    children:[
      {
        path: '/',
        name: 'home',
        meta:{
          index:1
        },
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/profile',
        name: 'profile',
        meta:{
          index:1,
          title:"我的"
        },
        //路由懒加载
        component: () => import('../views/Profile.vue')
      }
    ],

  },
  {//新闻
    path: '/News',
    component:()=>import('../views/News/newsList.vue')
  },
  {
    path: '/NewsDetail',
    component:()=>import('../views/News/newsDetail.vue')
  },
  {//垃圾分类
    path: '/Rubbish',
    component:()=>import('../views/Rubbish/Rubbish.vue')
  },
  {//历史今日
    path: '/todayHistory',
    component:()=>import('../views/todayHistory.vue')
  }
]

const router = new VueRouter({
  routes
})



export default router

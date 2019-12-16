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
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ],

  }
]

const router = new VueRouter({
  routes
})



export default router

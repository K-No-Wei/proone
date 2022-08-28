import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login' ,
    hidden: true,
    component: ()=>import('@/components/Login')
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: ()=>import('@/components/Login')
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component:() => import('@/views/HomeView.vue')
  // },
  {
    path: '/home',
    name: '学生管理',
    iconClass: 'fa fa-users',
    redirect: '/home/student',
    component:() => import('@/views/HomeView.vue'),
    children: [
      {
        path: '/home/student',
        name: '学生列表',
        iconClass: 'fa fa-list',
        component: ()=>import('@/components/students/StudentList.vue')
      },
      {
        path: '/home/info',
        name: '信息列表',
        iconClass: 'fa fa-alt',
        component: ()=>import('@/components/students/InfoList.vue')
      },
      {
        path: '/home/infos',
        name: '信息管理',
        iconClass: 'fa fa-list',
        component: ()=>import('@/components/students/InfoLists.vue')
      },
      {
        path: '/home/work',
        name: '作业列表',
        iconClass: 'fa fa-ul',
        component: ()=>import('@/components/students/WorkList.vue')
      },
      {
        path: '/home/works',
        name: '作业管理',
        iconClass: 'fa fa-list',
        component: ()=>import('@/components/students/WorkMenu.vue')
      }
    ]
  },
  {
    path: '/home',
    name: '数据分析',
    iconClass: 'fa fa-bar-chart',
    component:() => import('@/views/HomeView.vue'),
    children: [
      {
        path: '/home/dataView',
        name: '数据列表',
        iconClass: 'fa fa-line-chart',
        component: ()=>import('@/components/dataAnalsis/DataView')
      },
      {
        path: '/home/mapview',
        name: '地图概览',
        iconClass: 'fa fa-line-chart',
        component: ()=>import('@/components/dataAnalsis/MapView')
      },
      {
        path: '/home/travel',
        name: '旅游地图',
        iconClass: 'fa fa-line-chart',
        component: ()=>import('@/components/dataAnalsis/TravelMap')
      },
      {
        path: '/home/score',
        name: '分数地图',
        iconClass: 'fa fa-line-chart',
        component: ()=>import('@/components/dataAnalsis/ScoreMap')
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    hidden: true,
    component: ()=> import('@/components/NotFound')
  },
  {
    path: '/users',
    name: '用户中心',
    iconClass: 'fa fa-user',
    component: () => import('@/views/HomeView'),
    children: [
      {
        path: '/users/user',
        name: '权限管理',
        iconClass: 'fa fa-user',
        component: () => import('@/components/users/User')
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

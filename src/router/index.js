import Vue from 'vue'
import Router from 'vue-router'
//import APP from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect:'/index'
    },
    {
      path:'/index',
      meta:{
          //requireAuth: true,
          title:'会议首页',
      },
      component :(resolve) => require(['../components/home.vue'],resolve)
    },
    {
      path:'/org',
      meta:{
        title:'管理人员'
      },
      component :(resolve) => require(['../components/organizers.vue'],resolve)
    },
    {
      path:'/speakers',
      component :(resolve) => require(['../components/speakers.vue'],resolve)
    },
    {
      path:'/register',
      component: (resolve) => require(['../components/register.vue'],resolve)
    },
    {
      path:'/accommodation',
      component:(resolve) => require(['../components/accommodation.vue'],resolve)
    },
    {
      path:'/abstract',
      component:(resolve) => require(['../components/abstract.vue'],resolve)
    },
    {
      path:'/contact',
      component: (resolve) => require(['../components/contact.vue'],resolve)
    }
    // {
    //   path: '/',
    //   name: 'app',
    //   component: APP
    // }
  ]
})

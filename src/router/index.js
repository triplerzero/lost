import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'login'
    },
    {
      path:'/login',
      name:'Lgoin',
      component:Login
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import PostingEnrollment from '@/views/posting/PostingEnrollment.vue'
import SignUp from '@/views/SignUp.vue'
import Login from '@/views/Login.vue'
import EmploymentHomePage from '@/views/EmploymentHomePage.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/post',
      name: 'PostingEnrollment',
      component: PostingEnrollment
    },
    {
      path:'/signup',
      name:'SignUp',
      component: SignUp
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/home/:id',
      name:"EmploymentHomePage",
      component:EmploymentHomePage
    }
  ]
})

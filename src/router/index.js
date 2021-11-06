import Vue from 'vue'
import Router from 'vue-router'
import PostingEnrollment from '@/views/posting/PostingEnrollment.vue'
import SignUp from '@/views/SignUp.vue'
import Login from '@/views/Login.vue'
import EmploymentHomePage from '@/views/EmploymentHomePage.vue'
import Employment from '@/views/components/homepage/Employment.vue'
import Notice from '@/views/components/homepage/Notice.vue'
import MainPage from '@/views/components/homepage/MainPage.vue'
import JobPostingContent from '@/views/components/homepage/JobPostingContent.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
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
      component:EmploymentHomePage,
      children:[
        {
          path:"/",
          name:"MainPage",
          component:MainPage
        },
        {
          path:"notice",
          name:"Notice",
          component:Notice
        },
        {
          path:"employment",
          name:"Employment",
          component:Employment,
        },
        {
          path:"employment/:title",
          component:JobPostingContent
        }
      ]
    },
  ]
})

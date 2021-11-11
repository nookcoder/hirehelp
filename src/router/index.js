import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/views/SignUp.vue'
import Login from '@/views/Login.vue'

import EmploymentHomePage from '@/views/EmploymentHomePage.vue'
import Employment from '@/views/components/homepage/Employment.vue'
import Notice from '@/views/components/homepage/Notice.vue'
import MainPage from '@/views/components/homepage/MainPage.vue'
import JobPostingContent from '@/views/components/homepage/JobPostingContent.vue'
import Apply from '@/views/components/homepage/Apply.vue'

import NoticeForm from '@/views/NoticeForm.vue'
import PostingForm from '@/views/PostingForm.vue'
import PostingInfoForm from '@/views/components/posting-form/PostingInfoForm.vue'
import PostingContentForm from '@/views/components/posting-form/PostingContentForm.vue'
import PostingCheck from '@/views/components/posting-form/PostingCheck.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/form/notice',
      name: 'NoticeForm',
      component: NoticeForm
    },
    {
      path: '/form/posting',
      name: 'PostingForm',
      component:PostingForm,
      children:[
        {
          path:'/',
          name:'PostingInfoForm',
          component:PostingInfoForm
        },
        {
          path:"content",
          name:'PostingContentForm',
          component:PostingContentForm
        },
        {
          path:"check",
          name:"PostingCheck",
          component:PostingCheck
        }
      ]
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
          component:JobPostingContent,
        },
        {
          path:"apply",
          component:Apply, 
        }
      ]
    },
  ]
})

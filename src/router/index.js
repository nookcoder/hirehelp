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
import ChangeNotice from '@/views/ChangeNotice.vue'
import PostingForm from '@/views/PostingForm.vue'
import PostingInfoForm from '@/views/components/posting-form/PostingInfoForm.vue'
import PostingContentForm from '@/views/components/posting-form/PostingContentForm.vue'
import PostingCheck from '@/views/components/posting-form/PostingCheck.vue'
import ChangePosting from '@/views/components/posting-form/ChangePosting.vue'

import Resume from '@/views/Resume.vue'
import Home from '@/views/MainHome.vue'
import MyPage from '@/views/MyPage.vue'
import InterviewSetting from '@/views/InterviewEdit.vue'

import Store from '../store.js'
 
Vue.use(Router)

const rejectUser = (to, from, next) => {
  if (Store.state.isLogin === true) {
    // 이미 로그인 된 유저니까 막아야 한다.
    alert("이미 로그인을 하셨습니다.")
    next("/main")
  }
  else {
    next()
  }
}

const onlyUser = (to, from, next) => {
  if (Store.state.isLogin === false) {
    alert("로그인이 필요한 기능입니다.")
    next("/")
  }
  else {
    next()
  }
}

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/main',
      name: 'MainHome',
      component: Home
    },
    {
      path: '/notice',
      name: 'NoticeForm',
      component: NoticeForm,
      beforeEnter: onlyUser
    },
    {
      path:'/change/notice',
      component: ChangeNotice,
    },
    {
      path:'/change/posting',
      component: ChangePosting,
    },
    {
      path: '/mypage',
      name: 'MyPage',
      component: MyPage,
      beforeEnter: onlyUser
    },
    {
      path: '/posting',
      name: 'PostingForm',
      beforeEnter: onlyUser,
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
      path:'/resume',
      name:'Resume',
      component: Resume,
      beforeEnter: onlyUser,
    },
    {
      path:'/interviewsetting',
      name:'interviewsetting',
      component: InterviewSetting,
      beforeEnter: onlyUser,
    },
    {
      path:"/resume/:companyid/:recruitmentid",
      component:Applicants
    },
    {
      path:'/signup',
      name:'SignUp',
      component: SignUp,
      beforeEnter: rejectUser
    },
    {
      path:'/login',
      name:'Login',
      component:Login,
      beforeEnter: rejectUser
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
          path:"employment/:recrumentId",
          component: JobPostingContent,
        },
        {
          path: "employment/:recrumentId/apply",
          name:"apply",
          component:Apply,
        }
      ]
    },
  ]
})

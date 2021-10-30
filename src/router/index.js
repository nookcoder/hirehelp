import Vue from 'vue'
import Router from 'vue-router'
import PostingEnrollment from '@/views/posting/PostingEnrollment.vue'
import SignUp from '@/views/SignUp.vue'

Vue.use(Router)

export default new Router({
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
    }
  ]
})

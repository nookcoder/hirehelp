import Vue from 'vue'
import Router from 'vue-router'
import PostingEnrollment from '@/components/posting/PostingEnrollment.vue'

import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/RegisterJobPosting'
import Check from '@/components/CheckJobPosting'
import Manage from '@/components/ManageHomepage'

Vue.use(Router)

const register = Vue.component('home', require('../components/RegisterJobPosting.vue'))

export default new Router({
  routes: [
    {
      path: '/post/enrollment',
      name: 'PostingEnrollment',
      component: PostingEnrollment
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'RegisterJobPosting',
      component: Register
    },
    {
      path: '/check',
      name: 'CheckJobPosting',
      component: Check
    },
    {
      path: '/manage',
      name: 'ManageHomepage',
      component: Manage
    },
    {
      path: '/ing',
      name: 'Being',
      component: register
    }
  ]
})

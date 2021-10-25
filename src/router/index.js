import Vue from 'vue'
import Router from 'vue-router'
import PostingEnrollment from '@/components/PostingEnrollment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/post/enrollment',
      name: 'PostingEnrollment',
      component: PostingEnrollment
    }
  ]
})

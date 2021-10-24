import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: '@/components/HelloWorld'
    },
    {
      path: '/register',
      name: 'RegisterJobPosting',
      component: '@/components/RegisterJobPosting'
    },
    {
      path: '/check',
      name: 'CheckJobPosting',
      component: '@/components/CheckJobPosting'
    },
    {
      path: '/manage',
      name: 'ManageHomepage',
      component: '@/components/ManageHomepage'
    }
  ]
})

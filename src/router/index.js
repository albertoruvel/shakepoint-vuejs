import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import SignIn from '@/components/SignIn'
import AdminIndex from '@/components/admin/AdminIndex'
import AdminProducts from '@/components/admin/AdminProducts'
import {authService} from '@/services/ServiceContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/admin',
      name: 'AdminIndex',
      beforeEnter: (to, from, next) => {
        if (authService.isLoggedIn()) {
          console.log('user is logged in')
          next()
        } else {
          window.location.href = '/signin'
        }
      },
      component: AdminIndex,
      children: [
        {
          path: '/products',
          name: 'AdminProducts',
          component: AdminProducts
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

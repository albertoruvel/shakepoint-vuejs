import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import SignIn from '@/components/SignIn'
import Unauthorized from '@/components/shared/Unauthorized'
import AdminIndex from '@/components/admin/AdminIndex'
import AdminProducts from '@/components/admin/AdminProducts'
import {isLoggedIn} from '@/services/ServiceContainer'

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
      path: '/unauthorized',
      name: 'Unauthorized',
      component: Unauthorized
    },
    {
      path: '/admin',
      name: 'AdminIndex',
      beforeEnter: (to, from, next) => {
        console.log('Will check if user is logged in')
        if (isLoggedIn()) {
          console.log('user is logged in')
          next()
        } else {
          console.log('User is not logged in, redirecting to /signIn')
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

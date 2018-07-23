import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import SignIn from '@/components/SignIn'
import Unauthorized from '@/components/shared/Unauthorized'
import Admin from '@/components/admin/Admin'
import AdminIndex from '@/components/admin/AdminIndex'
import AdminProducts from '@/components/admin/AdminProducts'
import AdminVendings from '@/components/admin/AdminVendings'
import ViewVending from '@/components/admin/ViewVending'
import AdminUsers from '@/components/admin/AdminUsers'
import NewProduct from '@/components/admin/NewProduct'
import NewVending from '@/components/admin/NewVending'
import NewPartner from '@/components/admin/NewPartner'
import PromoCodesIndex from '@/components/admin/PromosIndex'
import {
    isLoggedIn, getUserRole, removeSession
}
from '@/services/ServiceContainer'

Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          component: Welcome,
          beforeEnter: (to, from, next) => {
              next()
          }
        },
        {
          path: '/signin',
          component: SignIn
        },
        {
          path: '/unauthorized',
          component: Unauthorized
        },
        {
            path: '/admin',
            beforeEnter: (to, from, next) => {
                if (isLoggedIn()) {
                    let role = getUserRole()
                    if (role !== 'ADMIN') {
                        window.location.href = "/"
                    } else {
                        next()
                    }
                }
            },
            component: Admin,
            children: [
        {
          path: 'home',
          component: AdminIndex
        },
        {
          path: 'products',
          component: AdminProducts
        },
        {
          path: 'vendings',
          component: AdminVendings
        },
        {
          path: 'partners',
          component: AdminUsers
        },
        {
          path: 'createProduct',
          component: NewProduct
        },
        {
          path: 'createVending',
          component: NewVending
        },
        {
          path: 'createPartner',
          component: NewPartner
        },
        {
          path: 'vending',
          component: ViewVending
        },
        {
          path: 'promos', 
          component: PromoCodesIndex
        }
      ]
    }
  ]
})

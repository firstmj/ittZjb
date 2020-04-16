import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
      {
        path: 'structure',
        name: 'structure',
        component: () => import('../components/index/structure.vue'),
        children: [
          {
            path: 'displacement',
            name: 'displacement',
            component: () => import('../components/index/displacement.vue'),
          },
          {
            path: 'settlement',
            name: 'settlement',
            component: () => import('../components/index/settlement.vue'),
          }

        ]
      },
        {
        path: 'data',
        name: 'data',
        component: () => import('../components/index/data.vue'),
        children: [
          {
            path: 'history',
            name: 'history',
            component: () => import('../components/index/history'),
          },
          {
            path: 'every',
            name: 'every',
            component: () => import('../components/index/every'),
          }
        ]
      },
      {
        path: 'warm',
        name: 'warm',
        component: () => import('../components/index/warn.vue'),
        children: [
          {
            path: 'threshold',
            name: 'threshold',
            component: () => import('../components/index/threshold'),
          },
          {
            path: 'management',
            name: 'management',
            component: () => import('../components/index/management'),
          }
        ]
      },
      {
        path: 'system',
        name: 'system',
        component: () => import('../components/index/system.vue'),
        children: [
          {
            path: 'device',
            name: 'device',
            component: () => import('../components/index/device'),
          },
          {
            path: 'database',
            name: 'database',
            component: () => import('../components/index/database'),
          },
          {
            path: 'user',
            name: 'user',
            component: () => import('../components/index/user'),
          }
        ]
      },{
        path: 'overview',
        name: 'overview',
        component: () => import('../components/index/overview.vue'),
      },{
        path: 'support',
        name: 'support',
        component: () => import('../components/index/support.vue'),
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

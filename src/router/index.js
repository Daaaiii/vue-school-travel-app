import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import sourceData from '@/data.json'

const routes = [
  { path: '/', name: 'Home', component: Home, alias: '/home' },

  {
    path: '/protected',
    name: 'protected',
    components: {
      default: () => import('@/views/ProtectedPage.vue'),
      LeftSidebar: () => import('@/components/LeftSidebar.vue')
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/invoices',
    name: 'invoices',
    components: {
      default: () => import('@/views/Invoices.vue'),
      LeftSidebar: () => import('@/components/LeftSidebar.vue')
    },
    meta: {
      requiresAuth: true
    }
  }, 
  {
    // path: '/example/:id(\\d+)', acept only digits
    // path: '/example/:id(\\d+)+', //id é um numero que pode ter numeros depois /1/2/4
    path: '/example/:id(\\d+)*', //pode ter ou não o id
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter(to, from) {
      const exists = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      )
      if (!exists)
        return {
          name: 'NotFound',
          // allows keeping the URL while rendering a different page
          params: { pathMatch: to.path.split('/').slice(1) },
          query: to.query,
          hash: to.hash
        }
    },
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import('@/views/ExperienceShow.vue'),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) })
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0 }), 300)
      })
    )
  }
})
router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !window.user) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})
export default router

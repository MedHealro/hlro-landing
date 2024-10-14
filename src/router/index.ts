import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import TermsPage from '@/pages/TermsPage.vue'
import PrivacyPage from '@/pages/PrivacyPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 144,
        behavior: 'smooth'
      }
    } else {
      return { top: 0, left: 0, behavior: 'smooth' }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    // {
    //   path: '/terms',
    //   name: 'terms',
    //   component: TermsPage
    // },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPage
    },
    {
      path: '/demo',
      name: 'demo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/RequestDemoPage.vue')
    }
  ]
})

export default router

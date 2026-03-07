import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import LandingView from '@/views/LandingView.vue'
import AuthView from '@/views/AuthView.vue'
import ClientDashboard from '@/views/client/ClientDashboard.vue'
import FreelancerDashboard from '@/views/freelancer/FreelancerDashboard.vue'
import AdminDashboard from '@/views/admin/AdminDashboard.vue'

const routes = [
  { path: '/', component: LandingView },

  { path: '/auth', component: AuthView },

  {
    path: '/client',
    component: ClientDashboard,
    meta: { role: 'client' }
  },
  {
    path: '/freelancer',
    component: FreelancerDashboard,
    meta: { role: 'freelancer' }
  },
  {
    path: '/admin',
    component: AdminDashboard,
    meta: { role: 'admin' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.role) {
    if (!auth.isAuthenticated) {
      return next('/auth')
    }

    if (auth.user.role !== to.meta.role) {
      return next('/')
    }
  }

  next()
})

export default router
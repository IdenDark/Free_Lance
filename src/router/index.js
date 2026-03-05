import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import LandingView from '@/views/LandingView.vue'

import FreelancerLayout from '@/views/freelancer/FreelancerLayout.vue'
import FreeLancerOverview from '@/views/freelancer/Overview.vue'
import FreeLancerApplications from '@/views/freelancer/Applications.vue'
import FreeLancerProfile from '@/views/freelancer/Profile.vue'
import FreeLancerBrowse from '@/views/freelancer/Browse.vue'








// import ClientDashboard from '@/views/client/ClientDashboard.vue'
// import AdminDashboard from '@/views/admin/AdminDashboard.vue'

const routes = [

  { path: '/', component: LandingView },






// Freelancer routes
{
  
  path: '/freelancer',
  component: FreelancerLayout,
  children: [
    {
      path: '',
      name: 'freelancer-overview',
      component: FreeLancerOverview
    },
    {
      path: 'browse',
      name: 'freelancer-browse',
      component: FreeLancerBrowse
    },
    {
      path: 'myapps',
      name: 'freelancer-apps',
      component: FreeLancerApplications
    },
    {
      path: 'profile',
      name: 'freelancer-profile',
      component: FreeLancerProfile
    }
  ]

}


  // {
  //   path: '/client',
  //   component: ClientDashboard,
  //   meta: { role: 'client' }
  // },
  
  // {
  //   path: '/admin',
  //   component: AdminDashboard,
  //   meta: { role: 'admin' }
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.role) {
    if (!auth.isAuthenticated) {
      return next('/')
    }

    if (auth.user.role !== to.meta.role) {
      return next('/')
    }
  }

  next()
})

export default router
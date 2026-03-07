import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import LandingView from '@/views/LandingView.vue'


// Freelancer Routes
import FreelancerLayout from '@/views/freelancer/FreelancerLayout.vue'
import FreeLancerOverview from '@/views/freelancer/Overview.vue'
import FreeLancerApplications from '@/views/freelancer/Applications.vue'
import FreeLancerProfile from '@/views/freelancer/Profile.vue'
import FreeLancerBrowse from '@/views/freelancer/Browse.vue'

// Admin Routes
import AdminLayout from '@/views/admin/AdminLayout.vue'
import AdminDashboard from '@/views/admin/Dashboard.vue'
import AdminUsers from '@/views/admin/Users.vue'
import AdminReports from '@/views/admin/Reports.vue'
import AdminSystem from '@/views/admin/System.vue'







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

  //admin routes

  

},

//admin routes

{
  path: '/admin',
  component: AdminLayout,
   meta: { role: 'admin' },
  children: [
    {
      path: '',
      name: 'admin-dashboard',
      component: AdminDashboard
    },
    {
      path: 'users',
      name: 'admin-users-manager',
      component: AdminUsers
    },
    {
      path: 'system',
      name: 'admin-system-perfomance',
      component: AdminSystem
    },
    {
      path: 'reports',
      name: 'admin-reports',
      component: AdminReports
    }
  ]
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
      return next('/')
    }

    if (auth.user.role !== to.meta.role) {
      return next('/')
    }
  }

  next()
})

export default router
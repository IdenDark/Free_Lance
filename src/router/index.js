import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import LandingView from '@/views/LandingView.vue'

import FreelancerLayout from '@/views/freelancer/FreelancerLayout.vue'
import FreeLancerOverview from '@/views/freelancer/Overview.vue'
import FreeLancerApplications from '@/views/freelancer/Applications.vue'
import FreeLancerProfile from '@/views/freelancer/Profile.vue'
import FreeLancerBrowse from '@/views/freelancer/Browse.vue'


// Client Routes
import ClientLayout from '@/views/client/ClientLayout.vue'
import Overview from '@/views/client/Overview.vue'
import Application from '@/views/client/Application.vue'
import ProjectsTab from '@/views/client/ProjectsTab.vue'
import JobsTab from '@/views/client/JobsTab.vue'


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

},

{
  path: '/client',
  component: ClientLayout,
  children: [
    {
      path: '',
      name: 'client-overview',
      component: Overview
    },
    {
      path: 'applications',
      name: 'applications',
      component: Application
    },
    {
      path: 'projects',
      name: 'projects',
      component: ProjectsTab
    },
    {
      path: 'jobs',
      name: 'jobs',
      component: JobsTab
    }
  
  ]
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
]},


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  // protect any route under /client or /freelancer (and admin handled by meta)
  if (to.path.startsWith('/client') || to.path.startsWith('/freelancer')) {
    if (!auth.isAuthenticated) {
      return next('/')
    }
    // enforce correct role
    if (to.path.startsWith('/client') && auth.role !== 'client') {
      return next('/')
    }
    if (to.path.startsWith('/freelancer') && auth.role !== 'freelancer') {
      return next('/')
    }
  }

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
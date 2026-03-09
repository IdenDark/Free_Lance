import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import LandingView from '@/views/LandingView.vue'

import FreelancerLayout from '@/views/freelancer/FreelancerLayout.vue'
import FreeLancerOverview from '@/views/freelancer/Overview.vue'
import FreeLancerApplications from '@/views/freelancer/Applications.vue'
import FreeLancerProfile from '@/views/freelancer/Profile.vue'
import FreeLancerBrowse from '@/views/freelancer/Browse.vue'



import ClientLayout from '@/views/client/ClientLayout.vue'
import Overview from '@/views/client/Overview.vue'
import Application from '@/views/client/Application.vue'
import ProjectsTab from '@/views/client/ProjectsTab.vue'
import JobsTab from '@/views/client/JobsTab.vue'









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
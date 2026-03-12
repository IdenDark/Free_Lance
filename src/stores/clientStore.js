import { defineStore } from 'pinia'
import { useJobsStore } from './jobsStore'

export const useClientStore = defineStore('client', {

  state: () => ({

    stats: {
      jobsPosted: 0,
      activeProjects: 0
    },

    projects: [],
    applications: []          // incoming freelancer applications

  }),

  actions: {

    createProject(job){
      const jobsStore = useJobsStore()
      jobsStore.postJob(job)
      this.projects.push(job)
      this.stats.jobsPosted++
    },

    // called when a freelancer applies to one of the client's jobs
    receiveApplication(job){
      // add minimal metadata for display
      this.applications.push({
        ...job,
        applicant: 'Freelancer',
        status: 'pending',
        statusLabel: 'Pending'
      })
    },

    // client clicks "Hire" on an application
    hire(app){
      // create a project record based on the application
      const project = {
        title: app.title || app.job || 'Untitled',
        status: 'in-progress',
        statusLabel: 'In progress',
        freelancer: app.applicant || 'Freelancer',
        due: 'TBD',
        budget: app.budget || '',
        progress: 0,
        milestones: []
      }

      this.projects.push(project)
      this.stats.activeProjects++

      // remove from applications
      this.applications = this.applications.filter(a => a.id !== app.id)
    }

  }

})
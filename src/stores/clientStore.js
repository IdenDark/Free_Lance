import { defineStore } from 'pinia'
import { useJobsStore } from './jobsStore'

export const useClientStore = defineStore('client', {

  state: () => ({

    stats: {
      jobsPosted: 0,
      activeProjects: 0
    },

    projects: []

  }),

  actions: {

    createProject(job){

    const jobsStore = useJobsStore()

    jobsStore.postJob(job)

    this.projects.push(job)

    this.stats.jobsPosted++

    }

  }

})
import { defineStore } from 'pinia'

//import of jobs
import { useJobsStore } from './jobsStore'

export const useFreelancerStore = defineStore('freelancer', {

  state: () => ({

    stats: {
      applications: 0,
      activeProjects: 0,
      earnings: 0
    },

    myApplications: []

  }),

  actions: {

    apply(job){



    const jobsStore = useJobsStore()

    // register application in jobs database
    jobsStore.applyToJob(job.id, "Freelancer")

    // track freelancer activity
    this.myApplications.push(job)

    this.stats.applications++

  

      this.myApplications.push(job)

      this.stats.applications++

    }

  }

})
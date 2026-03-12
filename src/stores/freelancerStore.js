import { defineStore } from 'pinia'

//import of jobs
import { useJobsStore } from './jobsStore'
import { useClientStore } from './clientStore'

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
      const clientStore = useClientStore()

      // register application in jobs database
      jobsStore.applyToJob(job.id, "Freelancer")

      // notify client side of the new application
      clientStore.receiveApplication(job)

      // track freelancer activity
      this.myApplications.push(job)
      this.stats.applications++
    }

}})
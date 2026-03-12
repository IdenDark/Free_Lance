import { defineStore } from 'pinia'

export const useJobsStore = defineStore('jobs', {

  state: () => ({
    
    featuredJobs: [
      {
        id: 1,
        title: 'Frontend Vue Developer',
        company: 'TechFlow',
        budget: '$2000',
        description: 'Build responsive UI using Vue and Tailwind',
        skills: ['Vue', 'Tailwind', 'JavaScript']
      },
      {
        id: 2,
        title: 'Laravel Backend Developer',
        company: 'DevSolutions',
        budget: '$3000',
        description: 'Develop API endpoints and authentication',
        skills: ['Laravel', 'PHP', 'MySQL'],
        

      }
    ],

    allJobs: [...this.featuredJobs],

    clientJobsList: [],

    activeJobs: []

  }),

  actions: {

    postJob(job){

      job.id = Date.now()

      this.allJobs.push(job)

      this.clientJobsList.push(job)

      this.activeJobs.push(job)
      this.featuredJobs.push(job)

    },

    applyToJob(jobId, freelancer){

      const job = this.allJobs.find(j => j.id === jobId)

      if(!job.applications){
        job.applications = []
      }

      job.applications.push(freelancer)

    }

  }


})
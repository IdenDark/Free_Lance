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

    allJobs: [

  { id: 1, 
    title: 'React Developer Needed', 
    desc: 'Build a new UI', 
    tags: ['React'], 
    status: 'open', 
    statusLabel: 'Open', 
    budget: '$2,000', 
    apps: 12 },

  { id: 2, title: 'UI/UX Design Project', desc: 'Design landing page', tags: ['Figma'], status: 'reviewing', statusLabel: 'Reviewing', budget: '$1,200', apps: 8 }


    ],

    clientJobsList: [],

    activeJobs: []

  }),

  actions: {

    postJob(job){

      job.id = Date.now()
      // normalize incoming job data to match store schema
      job.desc = job.desc || job.description || ''
      job.tags = job.tags || job.skills || []
      job.status = job.status || 'open'
      job.statusLabel = job.statusLabel || 'Open'
      job.budget = job.budget || ''
      job.apps = job.apps || 0

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
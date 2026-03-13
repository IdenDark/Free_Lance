import { defineStore } from 'pinia'

export const useAdminStore = defineStore('admin', {

  state: () => ({

    users: [],

    reports: [],

    systemLogs: []

  }),

  actions: {

    suspendUser(userId){

      const user = this.users.find(u => u.id === userId)

      if(user){
        user.status = 'suspended'
      }

    },

    resolveReport(reportId){

      const report = this.reports.find(r => r.id === reportId)

      if(report){
        report.status = 'resolved'
      }

    }

  }

})
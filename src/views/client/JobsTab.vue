
<script setup>
import { ref, computed } from 'vue'
import postJob from '../../components/postJob.vue'
import { useJobsStore } from '@/stores/jobsStore'

const jobsStore = useJobsStore()

const jobs =  jobsStore.allJobs

const jobSearch = ref('')
const showPostJob = ref(false)



const filteredClientJobs = computed(() =>
  jobs.value.filter(j =>
    j.title.toLowerCase().includes(jobSearch.value.toLowerCase())
  )
)
</script>


<template>
  <div class="page-enter">
          <div class="flex items-center gap-4 mb-6">
            <input type="text" placeholder="Search job posts..." class="max-w-xs" v-model="jobSearch"/>
            <select class="max-w-xs"><option>All Status</option><option>Open</option><option>In Progress</option><option>Completed</option></select>
            <button @click="showPostJob=true" class="btn-primary ml-auto text-sm px-4 py-2">+ Post New Job</button>
            <postJob v-model="showPostJob"/>
          </div>
          <div class="grid gap-4">
            <div v-for="job in jobs" :key="job.id"
              class="card-hover rounded-2xl border border-border p-6 flex flex-col md:flex-row md:items-center gap-4" style="background:#1A1A24;">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                  <h3 class="font-display font-600">{{ job.title }}</h3>
                  <span :class="'badge badge-'+job.status">{{ job.statusLabel }}</span>
                </div>
                <p class="text-muted text-sm mb-3">{{ job.desc || job.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tag in job.tags" :key="tag" class="badge" style="background:#2A2A38;color:#9090A8;border:none;font-size:11px;">{{ tag }}</span>
                </div>
              </div>
              <div class="flex flex-col items-end gap-2 min-w-max">
                <div class="font-display font-700 text-accent">{{ job.budget }}</div>
                <div class="text-muted text-xs">{{ job.apps }} applicants</div>
                <div class="flex gap-2 mt-2">
                  <button @click="clientTab='applications'" class="btn-outline text-xs px-3 py-1.5">View Apps</button>
                  <button class="text-muted hover:text-soft transition-colors text-xs px-2">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>


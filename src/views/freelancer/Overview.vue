<script setup>
// import { useRoute, useRouter } from 'vue-router'
// import { useAuthStore } from '@/stores/auth'

// const route = useRoute()
// const router = useRouter()
// const authStore = useAuthStore()

const freelancerStats = [
  { label: 'Active Jobs', value: '12', change: '+2 this week', color: '#64A0FF', icon: '💼' },
  { label: 'Total Earnings', value: '$4,250', change: '+$320 this month', color: '#4ADE80', icon: '💰' },
  { label: 'Completed Projects', value: '28', change: '+3 this month', color: '#F59E0B', icon: '✅' },
  { label: 'Profile Views', value: '156', change: '+12 today', color: '#8B5CF6', icon: '👁️' }
]

const featuredJobs = [
  { id: 1, title: 'React Developer Needed', company: 'TechCorp', type: 'Full-time', budget: '$50/hr', color: '#64A0FF', icon: '⚛️', tags: ['React', 'JavaScript'] },
  { id: 2, title: 'UI/UX Design Project', company: 'DesignStudio', type: 'Contract', budget: '$2,500', color: '#F59E0B', icon: '🎨', tags: ['Figma', 'Design'] },
  { id: 3, title: 'Node.js Backend', company: 'StartupXYZ', type: 'Part-time', budget: '$40/hr', color: '#4ADE80', icon: '🟢', tags: ['Node.js', 'Express'] },
  { id: 4, title: 'Mobile App Development', company: 'AppWorks', type: 'Full-time', budget: '$60/hr', color: '#8B5CF6', icon: '📱', tags: ['React Native', 'iOS'] }
]

// function navigateTo(path) {
//   router.push(path)
// }
</script>

<template>
  <div  class="page-enter space-y-8">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div v-for="s in freelancerStats" :key="s.label" class="stat-card rounded-2xl p-5 border border-border">
              <div class="flex items-center justify-between mb-4">
                <span class="text-muted text-xs font-500">{{ s.label }}</span>
                <div class="w-8 h-8 rounded-lg flex items-center justify-center" :style="`background:${s.color}15`">
                  <span v-html="s.icon" :style="`color:${s.color}`"></span>
                </div>
              </div>
              <div class="font-display font-700 text-2xl">{{ s.value }}</div>
              <div class="text-xs mt-1" :style="`color:${s.color}`">{{ s.change }}</div>
            </div>
          </div>

          <!-- Profile completion -->
          <div class="rounded-2xl border border-border p-6 flex flex-col md:flex-row md:items-center gap-6" style="background:linear-gradient(135deg,#1A1A24,#1E2030)">
            <div class="flex-1">
              <h3 class="font-display font-600 mb-1">Complete Your Profile</h3>
              <p class="text-muted text-sm mb-4">A complete profile gets 3× more responses from clients.</p>
              <div class="progress-bar h-2.5 mb-2" style="max-width:300px;">
                <div class="progress-fill h-full" style="width:72%"></div>
              </div>
              <p class="text-xs text-muted">72% complete — add portfolio samples to finish</p>
            </div>
            <button @click="freelancerTab='profile'" class="btn-primary text-sm px-6 py-2.5 flex-shrink-0">Complete Profile →</button>
          </div>

          <!-- Recommended jobs -->
          <div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-display font-600">Recommended for You</h3>
              <button @click="freelancerTab='browse'" class="text-accent text-xs hover:underline">Browse All</button>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
              <div v-for="job in featuredJobs.slice(0,4)" :key="job.id"
                class="card-hover p-5 rounded-2xl border border-border cursor-pointer" style="background:#1A1A24;" @click="freelancerTab='browse'">
                <div class="flex items-start gap-3 mb-3">
                  <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0" :style="`background:${job.color}20`">{{ job.icon }}</div>
                  <div>
                    <h4 class="font-display font-600 text-sm">{{ job.title }}</h4>
                    <p class="text-muted text-xs">{{ job.company }}</p>
                  </div>
                  <span class="badge badge-open ml-auto text-xs">{{ job.type }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex gap-1.5 flex-wrap">
                    <span v-for="tag in job.tags.slice(0,2)" :key="tag" class="badge" style="background:#2A2A38;color:#9090A8;border:none;font-size:10px;">{{ tag }}</span>
                  </div>
                  <span class="font-display font-600 text-accent text-sm">{{ job.budget }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const clientStats = [
  { label: 'Active Jobs', value: '8', change: '+2 this week', color: '#64A0FF', icon: '💼' },
  { label: 'Total Spent', value: '$12,450', change: '+$2,300 this month', color: '#4ADE80', icon: '💰' },
  { label: 'Hired Freelancers', value: '24', change: '+3 this month', color: '#F59E0B', icon: '👥' },
  { label: 'Avg. Rating', value: '4.8', change: '+0.2 this month', color: '#8B5CF6', icon: '⭐' }
]

const activeJobs = [
  { id: 1, title: 'React Developer Needed', apps: 12, date: '2 days ago', status: 'open', statusLabel: 'Open' },
  { id: 2, title: 'UI/UX Design Project', apps: 8, date: '1 week ago', status: 'reviewing', statusLabel: 'Reviewing' },
  { id: 3, title: 'Node.js Backend', apps: 15, date: '3 days ago', status: 'open', statusLabel: 'Open' },
  { id: 4, title: 'Mobile App Development', apps: 6, date: '5 days ago', status: 'closed', statusLabel: 'Closed' }
]

const recentActivity = [
  { id: 1, text: 'John Smith applied to "React Developer Needed"', time: '2 hours ago', color: '#64A0FF', icon: '👤' },
  { id: 2, text: 'You hired Sarah Johnson for "UI/UX Design Project"', time: '1 day ago', color: '#4ADE80', icon: '✅' },
  { id: 3, text: 'Mike Chen submitted work for "Node.js Backend"', time: '3 days ago', color: '#F59E0B', icon: '📄' },
  { id: 4, text: 'Payment of $2,500 sent to Alex Rodriguez', time: '1 week ago', color: '#8B5CF6', icon: '💳' }
]


</script>

<template>
  <div class="page-enter space-y-8">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div v-for="s in clientStats" :key="s.label" class="stat-card rounded-2xl p-5 border border-border">
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

          <!-- Recent Jobs + Activity -->
          <div class="grid lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2 rounded-2xl border border-border p-6 bg-card">
              <div class="flex items-center justify-between mb-5">
                <h3 class="font-display font-600">Active Job Posts</h3>
                <button @click="navigateTo('/client/jobs')" class="text-accent text-xs hover:underline">View All</button>
              </div>
              <div class="space-y-3">
                <div v-for="job in activeJobs" :key="job.id" class="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-border">
                  <div>
                    <div class="font-500 text-sm">{{ job.title }}</div>
                    <div class="text-muted text-xs mt-0.5">{{ job.apps }} applicants · Posted {{ job.date }}</div>
                  </div>
                  <div class="flex items-center gap-3">
                    <span :class="'badge badge-'+job.status">{{ job.statusLabel }}</span>
                    <button @click="navigateTo('/client/applications')" class="text-muted hover:text-soft text-xs transition-colors">Review →</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="rounded-2xl border border-border p-6 bg-card">
              <h3 class="font-display font-600 mb-5">Recent Activity</h3>
              <div class="space-y-4">
                <div v-for="a in recentActivity" :key="a.id" class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center" :style="`background:${a.color}15`">
                    <span v-html="a.icon" :style="`color:${a.color};font-size:14px`"></span>
                  </div>
                  <div>
                    <p class="text-xs text-soft leading-snug">{{ a.text }}</p>
                    <p class="text-muted text-xs mt-0.5">{{ a.time }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>


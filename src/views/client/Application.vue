<template>
  <div  class="page-enter">
          <div class="rounded-2xl border border-border overflow-hidden" style="background:#1A1A24;">
            <div class="p-6 border-b border-border flex items-center justify-between">
              <h3 class="font-display font-600">Incoming Applications</h3>
              <div class="flex gap-2">
                <span class="badge badge-pending">8 New</span>
              </div>
            </div>
            <div class="divide-y divide-border">
              <div v-for="app in applications" :key="app.id" class="p-6 hover:bg-white/5 transition-colors">
                <div class="flex flex-col md:flex-row md:items-start gap-4">
                  <div class="avatar w-12 h-12 text-sm flex-shrink-0 text-ink font-700" :style="`background:${app.color}`">{{ app.initials }}</div>
                  <div class="flex-1">
                    <div class="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                      <span class="font-display font-600">{{ app.name }}</span>
                      <span class="text-muted text-xs">· Applied for <span class="text-soft">{{ app.job }}</span></span>
                      <span :class="'badge badge-'+app.status+' ml-auto'">{{ app.statusLabel }}</span>
                    </div>
                    <p class="text-muted text-sm mb-3">{{ app.summary }}</p>
                    <div class="flex flex-wrap gap-2 mb-3">
                      <span v-for="tag in app.skills" :key="tag" class="badge" style="background:#2A2A38;color:#9090A8;border:none;font-size:11px;">{{ tag }}</span>
                    </div>
                    <div class="flex items-center gap-4 text-xs text-muted">
                      <span>⭐ {{ app.rating }} rating</span>
                      <span>{{ app.projects }} projects completed</span>
                      <span class="font-display font-600 text-accent">{{ app.rate }}</span>
                    </div>
                  </div>
                  <div class="flex gap-2 flex-shrink-0">
                    <button @click="hireFreelancer(app)" class="btn-primary text-xs px-4 py-2">Hire</button>
                    <button class="btn-outline text-xs px-3 py-2">View Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script setup>
import { ref } from 'vue'

const applications = ref([
  {
    id: 1,
    initials: 'JS',
    color: '#64A0FF',
    name: 'John Smith',
    job: 'React Developer Needed',
    status: 'pending',
    statusLabel: 'Pending',
    summary: 'Experienced developer available.',
    skills: ['Vue', 'JavaScript'],
    rating: 4.5,
    projects: 20,
    rate: '$50/hr'
  }
])

function hireFreelancer(app) {
  console.log('hiring', app)
}
</script>

<script setup>
import { ref } from 'vue'

const reports = ref([
  { id: 1, title: 'Inappropriate Content', desc: 'User posted offensive material in the job description.', priority: 'high', priorityLabel: 'High', reporter: 'Jane Smith', time: '2 hours ago' },
  { id: 2, title: 'Spam Account', desc: 'Multiple accounts created with similar details, likely bots.', priority: 'medium', priorityLabel: 'Medium', reporter: 'John Doe', time: '5 hours ago' },
  { id: 3, title: 'Payment Issue', desc: 'Freelancer claims they were not paid for a completed job.', priority: 'high', priorityLabel: 'High', reporter: 'Alice Williams', time: '1 day ago' },
  { id: 4, title: 'Harassment Report', desc: 'Client reported receiving inappropriate messages from a freelancer.', priority: 'critical', priorityLabel: 'Critical', reporter: 'Bob Johnson', time: '3 days ago' }
])
</script>

<template>
    <div class="page-enter space-y-4">
          <div v-for="r in reports" :key="r.id" class="rounded-2xl border border-border p-6" style="background:#1A1A24;">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style="background:rgba(255,107,107,0.1)">
                <svg width="18" height="18" fill="none" stroke="#FF6B6B" stroke-width="1.8" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/></svg>
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-1 flex-wrap">
                  <h3 class="font-display font-600 text-sm">{{ r.title }}</h3>
                  <span :class="'badge badge-'+r.priority">{{ r.priorityLabel }}</span>
                </div>
                <p class="text-muted text-sm mb-2">{{ r.desc }}</p>
                <div class="text-xs text-muted">Reported by <span class="text-soft">{{ r.reporter }}</span> · {{ r.time }}</div>
              </div>
              <div class="flex gap-2 shrink-0">
                <button class="btn-primary text-xs px-3 py-1.5">Resolve</button>
                <button class="btn-outline text-xs px-3 py-1.5">Dismiss</button>
              </div>
            </div>
          </div>
        </div>
</template>

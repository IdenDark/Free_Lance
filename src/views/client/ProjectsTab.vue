<template>
  <div  class="page-enter space-y-4">
          <div class="rounded-2xl border border-border p-6" style="background:#1A1A24;">
            <div class="flex flex-col md:flex-row md:items-start gap-4 mb-5">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-1">
                  <h3 class="font-display font-600">{{ proj.title }}</h3>
                  <span :class="'badge badge-'+proj.status">{{ proj.statusLabel }}</span>
                </div>
                <p class="text-muted text-sm">Freelancer: <span class="text-soft">{{ proj.freelancer }}</span> · Due {{ proj.due }}</p>
              </div>
              <div class="text-right">
                <div class="font-display font-600 text-accent">{{ proj.budget }}</div>
                <div class="text-muted text-xs">Fixed Price</div>
              </div>
            </div>
            <div class="mb-3">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-xs text-muted">Progress</span>
                <span class="text-xs font-600 text-accent">{{ proj.progress }}%</span>
              </div>
              <div class="progress-bar h-2">
                <div class="progress-fill h-full" :style="`width:${proj.progress}%`"></div>
              </div>
            </div>
            <div class="flex items-center justify-between mt-4">
              <div class="flex gap-2">
                <span v-for="m in proj.milestones" :key="m" class="badge" :class="proj.progress >= 80 ? 'badge-completed' : 'badge-progress'" style="font-size:11px;">{{ m }}</span>
              </div>
              <button class="btn-outline text-xs px-3 py-1.5">Message Freelancer</button>
            </div>
          </div>
        </div>
</template>

<script setup>
import { ref } from 'vue'

const proj = ref({
  title: 'Sample Project',
  status: 'open',
  statusLabel: 'Open',
  freelancer: 'Jane Doe',
  due: 'May 1, 2026',
  budget: '$1,200',
  progress: 45,
  milestones: ['Phase 1', 'Phase 2', 'Phase 3']
})
</script>
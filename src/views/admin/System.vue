<script setup>
import { ref } from 'vue'

const systemMetrics = ref([
  { label: 'CPU Usage', value: '75%', pct: 75, color: '#64A0FF', desc: 'Current CPU utilization across all servers.' },
  { label: 'Memory Usage', value: '60%', pct: 60, color: '#4ADE80', desc: 'Current memory utilization across all servers.' },
  { label: 'Disk Space', value: '85%', pct: 85, color: '#F59E0B', desc: 'Available disk space on primary storage.' },
  { label: 'Network Traffic', value: '45%', pct: 45, color: '#8B5CF6', desc: 'Current network traffic volume.' }
])

const systemLogs = ref([
  { id: 1, time: '2023-10-01 10:00', level: 'INFO', msg: 'System started successfully.', color: '#64A0FF' },
  { id: 2, time: '2023-10-01 10:05', level: 'WARN', msg: 'High CPU usage detected.', color: '#F59E0B' },
  { id: 3, time: '2023-10-01 10:10', level: 'ERROR', msg: 'Database connection failed.', color: '#FF6B6B' }
])
</script>


<template>
<div  class="page-enter space-y-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div v-for="m in systemMetrics" :key="m.label" class="rounded-2xl border border-border p-5" style="background:#1A1A24;">
              <div class="flex items-center justify-between mb-3">
                <span class="text-muted text-sm">{{ m.label }}</span>
                <span class="font-display font-600" :style="`color:${m.color}`">{{ m.value }}</span>
              </div>
              <div class="progress-bar h-2">
                <div class="h-full rounded" :style="`width:${m.pct}%;background:${m.color}`"></div>
              </div>
              <p class="text-muted text-xs mt-2">{{ m.desc }}</p>
            </div>
          </div>
          <div class="rounded-2xl border border-border p-6" style="background:#1A1A24;">
            <h3 class="font-display font-600 mb-4">System Log</h3>
            <div class="space-y-2 font-mono text-xs">
              <div v-for="log in systemLogs" :key="log.id" class="flex items-center gap-3">
                <span class="text-muted w-40 flex-shrink-0">{{ log.time }}</span>
                <span class="w-16 flex-shrink-0" :style="`color:${log.color}`">{{ log.level }}</span>
                <span class="text-soft">{{ log.msg }}</span>
              </div>
            </div>
          </div>
        </div>
</template>
<template>
  <div class="page-enter space-y-8">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div v-for="s in adminStats" :key="s.label" class="stat-card rounded-2xl p-5 border border-border">
              <div class="flex items-center justify-between mb-4">
                <span class="text-muted text-xs font-500">{{ s.label }}</span>
                <div class="w-8 h-8 rounded-lg flex items-center justify-center bg-accent/10">
                  <span v-html="s.icon" class="text-accent"></span>
                </div>
              </div>
              <div class="font-display font-700 text-2xl">{{ s.value }}</div>
              <div
                class="text-xs mt-1"
                :class="{
                  'text-accent': s.change.startsWith('+'),
                  'text-error': s.change.startsWith('-')
                }"
              >
                {{ s.change }}
              </div>
            </div>
          </div>

          <!-- Quick actions -->
          <div class="grid md:grid-cols-3 gap-4">
            <router-link to="/admin/users" class="card-hover rounded-2xl border border-border p-6 text-center bg-card">
              <div class="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" class="text-accent"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <h4 class="font-display font-600 mb-1">User Management</h4>
              <p class="text-muted text-xs">Review & manage all accounts</p>
            </router-link>

            <router-link to="/admin/reports" class="card-hover rounded-2xl border border-border p-6 text-center bg-card">
              <div class="w-12 h-12 rounded-2xl bg-accent-warning/10 flex items-center justify-center mx-auto mb-3">
                <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" class="text-accent-warning"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h4 class="font-display font-600 mb-1">Pending Reports</h4>
              <p class="text-muted text-xs">5 reports need attention</p>
            </router-link>
            <router-link to="/admin/system" class="card-hover rounded-2xl border border-border p-6 text-center bg-card">
              <div class="w-12 h-12 rounded-2xl bg-accent-success/10 flex items-center justify-center mx-auto mb-3">
                <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" class="text-accent-success"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h4 class="font-display font-600 mb-1">System Health</h4>
              <p class="text-muted text-xs">Monitor platform metrics</p>
            </router-link>
          </div>

          <!-- Recent users -->
          <div class="rounded-2xl border border-border bg-card">
            <div class="p-5 border-b border-border flex items-center justify-between">
              <h3 class="font-display font-600">Recent Registrations</h3>
              <router-link to="/admin/users" class="text-accent text-xs hover:underline">View All</router-link>
            </div>
            <div class="divide-y divide-border">
              <div v-for="u in adminUsers.slice(0,4)" :key="u.id" class="px-5 py-4 flex items-center gap-4 hover:bg-white/5 transition-colors">
                <div class="avatar w-9 h-9 text-xs text-ink flex-shrink-0 bg-accent">{{ u.initials }}</div>
                <div class="flex-1">
                  <div class="font-500 text-sm">{{ u.name }}</div>
                  <div class="text-muted text-xs">{{ u.email }}</div>
                </div>
                <span class="badge" :class="u.role==='Client'?'badge-progress':'badge-open'" style="font-size:11px;">{{ u.role }}</span>
                <span :class="'badge badge-'+u.status" style="font-size:11px;">{{ u.statusLabel }}</span>
                <div class="text-muted text-xs">{{ u.joined }}</div>
              </div>
            </div>
          </div>
        </div>
</template>


<script setup>
import { ref } from 'vue'

const adminStats = ref([
  { label: 'Total Users', value: '2,543', change: '+12% this month', icon: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M16 3.13a4 4 0 010 7.75"/></svg>' },
  { label: 'Active Projects', value: '89', change: '+5% this month', icon: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 11l3 3L22 4"/></svg>' },
  { label: 'Revenue', value: '$48.5K', change: '+23% this month', icon: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9h6a2 2 0 012 2v2a2 2 0 01-2 2H9v2"/></svg>' },
  { label: 'Pending Tasks', value: '24', change: '-8% this month', icon: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' }
])

const adminUsers = ref([
  { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Client', status: 'active', statusLabel: 'Active', initials: 'SJ', joined: '2 days ago' },
  { id: 2, name: 'Mike Chen', email: 'mike@example.com', role: 'Freelancer', status: 'active', statusLabel: 'Active', initials: 'MC', joined: '5 days ago' },
  { id: 3, name: 'Emma Davis', email: 'emma@example.com', role: 'Client', status: 'pending', statusLabel: 'Pending', initials: 'ED', joined: '1 week ago' },
  { id: 4, name: 'Alex Rodriguez', email: 'alex@example.com', role: 'Freelancer', status: 'active', statusLabel: 'Active', initials: 'AR', joined: '2 weeks ago' },
  { id: 5, name: 'Lisa Park', email: 'lisa@example.com', role: 'Client', status: 'active', statusLabel: 'Active', initials: 'LP', joined: '3 weeks ago' }
])
</script>

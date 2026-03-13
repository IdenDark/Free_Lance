<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

// ensure user list is loaded
authStore.loadUsers()

const adminUsers = computed(() => {
  return authStore.users.map((u, idx) => {
    const initials = u.name
      .split(' ')
      .map(p => p[0])
      .join('')
      .slice(0, 2)
    const color = '#' + Math.floor(Math.random() * 16777215).toString('16').padStart(6, '0')
    return {
      id: idx + 1,
      name: u.name,
      email: u.email,
      role: u.role.charAt(0).toUpperCase() + u.role.slice(1),
      status: 'active',
      statusLabel: 'Active',
      joined: u.joined || 'N/A',
      color,
      initials
    }
  })
})
</script>



<template>

   <div  class="page-enter">
          <div class="flex gap-4 mb-5 flex-wrap">
            <input type="text" placeholder="Search users..." class="max-w-xs"/>
            <select class="w-40"><option>All Roles</option><option>Client</option><option>Freelancer</option></select>
            <select class="w-40"><option>All Status</option><option>Active</option><option>Suspended</option></select>
          </div>
          <div class="rounded-2xl border border-border overflow-hidden bg-card">
            <table class="w-full">
              <thead>
                <tr class="border-b border-border">
                  <th class="text-left px-5 py-3 text-xs text-muted font-500">User</th>
                  <th class="text-left px-5 py-3 text-xs text-muted font-500">Role</th>
                  <th class="text-left px-5 py-3 text-xs text-muted font-500">Status</th>
                  <th class="text-left px-5 py-3 text-xs text-muted font-500">Joined</th>
                  <th class="text-left px-5 py-3 text-xs text-muted font-500">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-border">
                <tr v-for="u in adminUsers" :key="u.id" class="hover:bg-white/5 transition-colors">
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-3">
                      <div class="avatar w-8 h-8 text-xs text-ink flex-shrink-0" :style="`background:${u.color}`">{{ u.initials }}</div>
                      <div>
                        <div class="font-500 text-sm">{{ u.name }}</div>
                        <div class="text-muted text-xs">{{ u.email }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-4"><span class="badge" :class="u.role==='Client'?'badge-progress':'badge-open'" style="font-size:11px;">{{ u.role }}</span></td>
                  <td class="px-5 py-4"><span :class="'badge badge-'+u.status" style="font-size:11px;">{{ u.statusLabel }}</span></td>
                  <td class="px-5 py-4 text-muted text-xs">{{ u.joined }}</td>
                  <td class="px-5 py-4">
                    <div class="flex gap-2">
                      <button class="text-xs text-muted hover:text-soft transition-colors">View</button>
                      <button class="text-xs text-accent hover:underline">Edit</button>
                      <button class="text-xs text-red-400 hover:underline">Suspend</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

</template>



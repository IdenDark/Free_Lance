<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const adminNav = [
  { label: 'Dashboard', path: '/admin' },
  { label: 'Reports', path: '/admin/reports' },
  { label: 'Users', path: '/admin/users' },
  { label: 'System', path: '/admin/system' }
]

function logout() {
  authStore.logout()
}
</script>


<template>
  <div class="flex min-h-screen">

    <!-- Sidebar -->
    <aside class="w-64 bg-dark text-black p-6">
      <h2 class="text-xl font-bold mb-6">Admin Panel</h2>

     <nav class="p-4 flex-1 space-y-1">
        <router-link
          v-for="item in adminNav"
          :key="item.path"
          :to="item.path"
          class="px-3 py-2.5 flex items-center gap-3 text-sm rounded-lg transition"
          :class="route.path === item.path ? 'bg-accent/10 text-accent' : 'text-muted hover:text-soft'"
        >
          {{ item.label }}
        </router-link>
      </nav>
       <div class="p-4 border-t border-border">
        <button
          @click="logout"
          class="w-full px-3 py-2.5 flex items-center gap-3 text-sm text-muted hover:text-soft"
        >
          Sign Out
        </button>
      </div>
    </aside>

    

    <!-- Page content -->
    <main class="flex-1 p-8">
      <router-view />
    </main>

  </div>
</template>
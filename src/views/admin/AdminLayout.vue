<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import ThemeToggle from '@/components/ThemeToggle.vue'

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

    <!-- SIDEBAR -->
    <aside class="sidebar w-64 fixed top-0 left-0 h-full border-r border-border flex flex-col bg-secondary">
      <div class="p-6 border-b border-border">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span class="font-display font-800 text-ink text-sm">F</span>
          </div>
          <span class="font-display font-700">FreelanceHub</span>
        </div>
      </div>
      <div class="p-4 border-b border-border">
        <div class="flex items-center gap-3 p-3">
          <div class="avatar w-10 h-10 text-sm text-ink bg-accent">SM</div>
          <div>
            <div class="font-display font-600 text-sm">Sarah Mitchell</div>
            <div class="text-muted text-xs">System Administrator</div>
          </div>
        </div>
      </div>


      <nav class="p-4 flex-1 space-y-1">
        <router-link
          v-for="item in adminNav"
          :key="item.path"
          :to="item.path"
          class="px-3 py-2.5 flex items-center gap-3 text-sm rounded-lg transition"
          :class="route.path === item.path ? 'bg-accent/10 text-accent' : 'text-muted hover:text-soft'"
        >
          <span v-html="item.icon" class="w-5 h-5 shrink-0"></span>
          <span>{{ item.label }}</span>
          <span v-if="item.badge" class="ml-auto badge badge-pending text-xs">{{ item.badge }}</span>
        </router-link>
      </nav>
      <div class="p-4 border-t border-border">
        <button @click="logout" class="w-full px-3 py-2.5 flex items-center gap-3 text-sm text-muted hover:text-soft">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
          <span>Sign Out</span>
        </button>
      </div>
    </aside>

    <!-- MAIN CONTENT -->
    <main class="flex-1 ml-64 min-h-screen">
   
      <!-- Topbar -->
        <div class="sticky top-0 z-10 glass border-b border-border px-8 py-4 flex items-center justify-between">
        <div>
          <h1 class="font-display font-700 text-lg">{{ adminNav.find(item => item.path === route.path)?.label || 'Dashboard' }}</h1>
          <p class="text-muted text-xs">System Administrator · Full Access</p>
        </div>
        <div class="flex items-center gap-4">
          <ThemeToggle />
          <div class="badge badge-completed">
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot mr-1.5"></span>
            System Healthy
          </div>
        </div>
      </div>

      <!-- DYNAMIC CONTENT -->
      <div class="p-8">
        <router-view />
      </div>
    </main>

  </div>
</template>
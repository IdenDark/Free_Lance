<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const freelancerNav = [
  { label: 'Overview', path: '/freelancer' },
  { label: 'Browse Jobs', path: '/freelancer/browse' },
  { label: 'My Applications', path: '/freelancer/myapps' },
  { label: 'Profile', path: '/freelancer/profile' }
]

function logout() {
  authStore.logout()
}
</script>

<template>
  <div class="flex min-h-screen">

    <!-- SIDEBAR -->
    <aside
      class="w-64 fixed top-0 left-0 h-full border-r border-border flex flex-col"
      style="background:#13131A;"
    >
      <!-- Logo -->
      <div class="p-6 border-b border-border">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span class="font-display font-800 text-ink text-sm">F</span>
          </div>
          <span class="font-display font-700">FreelanceHub</span>
        </div>
      </div>

      <!-- User -->
      <div class="p-4 border-b border-border">
        <div class="flex items-center gap-3 p-3">
          <div class="avatar w-10 h-10 text-sm text-ink" style="background:#64A0FF;">
            DO
          </div>
          <div>
            <div class="font-display font-600 text-sm">
              {{ authStore.user?.name || 'Freelancer' }}
            </div>
            <div class="text-muted text-xs">Freelancer</div>
          </div>
        </div>
      </div>

      <!-- NAVIGATION -->
      <nav class="p-4 flex-1 space-y-1">
        <router-link
          v-for="item in freelancerNav"
          :key="item.path"
          :to="item.path"
          class="px-3 py-2.5 flex items-center gap-3 text-sm rounded-lg transition"
          :class="route.path === item.path ? 'bg-accent/10 text-accent' : 'text-muted hover:text-soft'"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <!-- LOGOUT -->
      <div class="p-4 border-t border-border">
        <button
          @click="logout"
          class="w-full px-3 py-2.5 flex items-center gap-3 text-sm text-muted hover:text-soft"
        >
          Sign Out
        </button>
      </div>
    </aside>

    <!-- MAIN CONTENT -->
    <main class="flex-1 ml-64 min-h-screen">
      <!-- Top Bar -->
      <div
        class="sticky top-0 z-10 glass border-b border-border px-8 py-4 flex items-center justify-between"
      >
        <div>
          <h1 class="font-display font-700 text-lg">
            Freelancer Dashboard
          </h1>
          <p class="text-muted text-xs">
            {{ new Date().toDateString() }}
          </p>
        </div>
      </div>

      <!-- DYNAMIC CONTENT -->
      <div class="p-8">
        <router-view />
      </div>
    </main>

  </div>
</template>
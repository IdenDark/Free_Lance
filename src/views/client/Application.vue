<template>
  <div class="page-enter">
    <div
      class="rounded-2xl border border-border overflow-hidden"
      style="background:#1A1A24;"
    >
      <div class="p-6 border-b border-border flex items-center justify-between">
        <h3 class="font-display font-600">Incoming Applications</h3>
        <div class="flex gap-2">
          <span class="badge badge-pending">{{ applications.length }} New</span>
        </div>
      </div>
      <div class="divide-y divide-border">
        <div
          v-for="app in applications"
          :key="app.id"
          class="p-6 hover:bg-white/5 transition-colors"
        >
          <div class="flex flex-col md:flex-row md:items-start gap-4">
            <div class="flex-1">
              <div class="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                <span class="font-display font-600">{{ app.title || app.job }}</span>
                <span class="text-muted text-xs">
                  · Applicant: <span class="text-soft">{{ app.applicant }}</span>
                </span>
                <span
                  :class="'badge badge-'+app.status+' ml-auto'"
                  >{{ app.statusLabel }}</span
                >
              </div>
              <p class="text-muted text-sm mb-3">
                {{ app.company }}
              </p>
            </div>
            <div class="flex gap-2 flex-shrink-0">
              <button
                @click="hireFreelancer(app)"
                class="btn-primary text-xs px-4 py-2"
              >
                Hire
              </button>
              <!-- could add view profile in future -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useClientStore } from '@/stores/clientStore'

const clientStore = useClientStore()

const applications = computed(() => clientStore.applications)

function hireFreelancer(app) {
  clientStore.hire(app)
}
</script>
<template>
  <div class="page-enter space-y-4">
    <!-- simple header badges could be updated dynamically later -->
    <div class="flex gap-3 flex-wrap mb-2">
      <span class="badge badge-open">{{ applications.length }} Applied</span>
    </div>

    <div
      v-for="app in applications"
      :key="app.id"
      class="rounded-2xl border border-border p-6"
      style="background:#1A1A24;"
    >
      <div class="flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-1 flex-wrap">
            <h3 class="font-display font-600">{{ app.title }}</h3>
            <!-- status placeholder for future use -->
            <span class="badge badge-open">Applied</span>
          </div>
          <p class="text-muted text-xs mb-3">
            {{ app.company }} · Applied {{ app.appliedAt }}
          </p>
        </div>
        <div class="text-right">
          <div class="font-display font-600 text-accent">{{ app.budget }}</div>
          <div class="text-muted text-xs">Budget</div>
        </div>
      </div>
    </div>

    <div v-if="applications.length === 0" class="text-muted text-center py-8">
      You haven't applied to any jobs yet.
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFreelancerStore } from '@/stores/freelancerStore'

const freelancerStore = useFreelancerStore()

// map raw job objects into a view-friendly shape with applied timestamp
const applications = computed(() => {
  return freelancerStore.myApplications.map(job => ({
    id: job.id,
    title: job.title || job.job || 'Untitled',
    company: job.company || '',
    budget: job.budget || '',
    appliedAt: new Date().toLocaleDateString(),
    // additional fields could be added here later (status, timeline, etc.)
  }))
})
</script>
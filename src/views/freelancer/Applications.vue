<template>
  <div  class="page-enter space-y-4">
          <div class="flex gap-3 flex-wrap mb-2">
            <span class="badge badge-open">2 Under Review</span>
            <span class="badge badge-pending">1 Shortlisted</span>
            <span class="badge badge-completed">3 Completed</span>
          </div>
          <div v-for="app in myApplications" :key="app.id" class="rounded-2xl border border-border p-6" style="background:#1A1A24;">
            <div class="flex flex-col md:flex-row md:items-center gap-4">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-1 flex-wrap">
                  <h3 class="font-display font-600">{{ app.job }}</h3>
                  <span :class="'badge badge-'+app.status">{{ app.statusLabel }}</span>
                </div>
                <p class="text-muted text-xs mb-3">{{ app.company }} · Applied {{ app.applied }}</p>
                <!-- Status timeline -->
                <div class="flex items-center gap-2 text-xs text-muted">
                  <div class="flex items-center gap-1" v-for="(step, i) in app.timeline" :key="i">
                    <div class="w-2 h-2 rounded-full" :class="step.done ? 'bg-accent' : 'bg-border'"></div>
                    <span :class="step.done ? 'text-soft' : 'text-muted'">{{ step.label }}</span>
                    <span v-if="i < app.timeline.length-1" class="text-border mx-1">→</span>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <div class="font-display font-600 text-accent">{{ app.rate }}</div>
                <div class="text-muted text-xs">Proposed Rate</div>
              </div>
            </div>
          </div>
        </div>
</template>
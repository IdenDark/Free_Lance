<script setup>
const showPostJob = defineModel()

</script>

<template>
<div v-if="showPostJob" class="fixed inset-0 z-50 flex items-center justify-center p-4" style="background:rgba(13,13,18,0.9);backdrop-filter:blur(8px);">
    <div class="glass rounded-2xl p-8 w-full max-w-lg relative page-enter max-h-[90vh] overflow-y-auto">
      <button @click="showPostJob=false" class="absolute top-4 right-4 text-muted hover:text-soft transition-colors text-xl">✕</button>
      <h2 class="font-display font-700 text-xl mb-6">Post a New Job</h2>
      <div class="space-y-4">
        <div><label class="text-xs text-muted mb-1 block">Job Title</label><input placeholder="e.g. React Developer for E-Commerce Rebuild"/></div>
        <div><label class="text-xs text-muted mb-1 block">Category</label>
          <select><option>Development</option><option>Design</option><option>Writing & Content</option><option>Marketing</option><option>Data & Analytics</option></select>
        </div>
        <div><label class="text-xs text-muted mb-1 block">Job Description</label><textarea rows="4" placeholder="Describe the project, deliverables, and requirements clearly..."></textarea></div>
        <div class="grid grid-cols-2 gap-4">
          <div><label class="text-xs text-muted mb-1 block">Budget</label><input placeholder="$500 - $2,000"/></div>
          <div><label class="text-xs text-muted mb-1 block">Duration</label>
            <select><option>Less than 1 week</option><option>1-4 weeks</option><option>1-3 months</option><option>3+ months</option></select>
          </div>
        </div>
        <div><label class="text-xs text-muted mb-1 block">Required Skills</label><input placeholder="React, Node.js, PostgreSQL..."/></div>
        <div><label class="text-xs text-muted mb-1 block">Application Deadline</label><input type="date" style="color:#9090A8"/></div>
      </div>
      <div class="flex gap-3 mt-6">
        <!-- <button @click="/*submitJob()*/" class="btn-primary flex-1">Post Job →</button>
        <button @click="/*showPostJob=false*/" class="btn-outline px-5">Cancel</button> -->
      </div>
    </div>
  </div>
</template>


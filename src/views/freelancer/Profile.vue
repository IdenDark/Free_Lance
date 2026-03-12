<script setup>
import { ref } from 'vue'

const freelancerSkills = ref(['React', 'Node.js', 'Vue.js',])
</script>

<template>
  <div  class="page-enter max-w-2xl space-y-6">
          <div class="rounded-2xl border border-border p-6" style="background:#1A1A24;">
            <h3 class="font-display font-600 mb-5">Personal Information</h3>
            <div class="flex items-center gap-4 mb-6">
              <div class="avatar w-16 h-16 text-lg text-ink font-700" style="background:#64A0FF;">DO</div>
              <div>
                <button class="btn-outline text-xs px-4 py-2">Upload Photo</button>
                <p class="text-muted text-xs mt-1">JPG, PNG max 2MB</p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div><label class="text-xs text-muted mb-1 block">First Name</label><input value="Daniel"/></div>
              <div><label class="text-xs text-muted mb-1 block">Last Name</label><input value="Osei"/></div>
              <div class="col-span-2"><label class="text-xs text-muted mb-1 block">Professional Headline</label><input value="Full-Stack Web Developer · React & Node.js Specialist"/></div>
              <div class="col-span-2"><label class="text-xs text-muted mb-1 block">Bio</label><textarea rows="3">Passionate computer science student and part-time freelance developer with 2+ years building scalable web applications for clients globally.</textarea></div>
              <div><label class="text-xs text-muted mb-1 block">Hourly Rate</label><input value="$35"/></div>
              <div><label class="text-xs text-muted mb-1 block">Country</label><input value="Ghana, Accra"/></div>
            </div>
          </div>
          <div class="rounded-2xl border border-border p-6" style="background:#1A1A24;">
            <h3 class="font-display font-600 mb-5">Skills</h3>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="skill in freelancerSkills" :key="skill" class="badge badge-progress cursor-pointer hover:bg-red-500/10">{{ skill }} ✕</span>
            </div>
            <input placeholder="Add a skill..." />
          </div>
          <button class="btn-primary px-8 py-3">Save Profile</button>
        </div>
</template>
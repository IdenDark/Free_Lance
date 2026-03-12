<template>
   <div  class="page-enter">
          <div class="flex flex-col md:flex-row gap-4 mb-6">
            <input type="text" placeholder="Search jobs, skills, keywords..." class="flex-1" v-model="browseSearch"/>
            <select class="md:w-48"><option>All Categories</option><option>Development</option><option>Design</option><option>Writing</option></select>
            <select class="md:w-40"><option>Any Budget</option><option>Under $500</option><option>$500–$2000</option><option>$2000+</option></select>
          </div>
          <div class="grid gap-4">
            <div v-for="job in allJobs" :key="job.id"
              class="card-hover rounded-2xl border border-border p-6 bg-card">
              <div class="flex flex-col md:flex-row md:items-start gap-4">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" :style="`background:${job.color}20`">{{ job.icon }}</div>
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 class="font-display font-600">{{ job.title }}</h3>
                    <span class="badge badge-open">{{ job.type }}</span>
                  </div>
                  <p class="text-muted text-xs mb-3">{{ job.company }} · Posted {{ job.posted }}</p>
                  <p class="text-soft text-sm mb-4 leading-relaxed">{{ job.desc }}</p>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in job.tags" :key="tag" class="badge" style="background:#2A2A38;color:#9090A8;border:none;font-size:11px;">{{ tag }}</span>
                  </div>
                </div>
                <div class="flex flex-col items-end gap-3 min-w-max">
                  <div class="font-display font-700 text-accent text-lg">{{ job.budget }}</div>
                  <div class="text-muted text-xs text-right">{{ job.duration }}</div>
                  <button @click="applyToJob(job)" class="btn-primary text-sm px-5 py-2">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>
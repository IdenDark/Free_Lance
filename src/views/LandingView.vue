<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { ref, watch } from 'vue'

import AuthModal from '@/components/AuthModal.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

const showAuth = ref(false)

const router = useRouter()
const auth = useAuthStore()

/* ---------- Navigation Logic ---------- */

// if the user becomes authenticated while on landing, send them to their home
watch(
  () => auth.isAuthenticated,
  isAuth => {
    if (isAuth) {
      const dest = {
        client: '/client',
        freelancer: '/freelancer',
        admin: '/admin'
      }[auth.role] || '/'
      router.push(dest)
    }
  }
)

function goToAuth(type) {
  router.push('/auth')
}

function goToDashboard(role) {
  // If not authenticated, open login/register modal first
  if (!auth.isAuthenticated) {
    showAuth.value = true
    return
  }
  router.push(`/${role}`)
}

/* ---------- Static Data (moved from inline Vue app) ---------- */

const stats = ref([
  { value: '12K+', label: 'Freelancers' },
  { value: '4.8/5', label: 'Average Rating' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '$2M+', label: 'Paid This Month' }
])

const featuredJobs = ref([
  {
    id: 1,
    icon: '💻',
    title: 'Frontend Developer',
    company: 'TechNova Inc.',
    type: 'Remote',
    budget: '$2,500',
    tags: ['Vue', 'Tailwind', 'API'],
    color: '#C8F53E'
  },
  {
    id: 2,
    icon: '🎨',
    title: 'UI/UX Designer',
    company: 'PixelCraft Studio',
    type: 'Contract',
    budget: '$1,800',
    tags: ['Figma', 'UX Research'],
    color: '#8B5CF6'
  },
  {
    id: 3,
    icon: '📱',
    title: 'Mobile App Developer',
    company: 'StartApp Labs',
    type: 'Full-Time',
    budget: '$3,200',
    tags: ['Flutter', 'Firebase'],
    color: '#3B82F6'
  }
])

const howItWorks = ref([
  {
    title: 'Post a Project',
    desc: 'Describe your needs and receive proposals from qualified freelancers.'
  },
  {
    title: 'Hire Talent',
    desc: 'Review portfolios, compare bids, and select the right expert.'
  },
  {
    title: 'Deliver & Pay',
    desc: 'Collaborate seamlessly and release payment when satisfied.'
  }
])
</script>


<template>
  <div class="min-h-screen page-enter">

    <!-- ================= NAV ================= -->
    <nav class="fixed top-0 w-full z-50 glass border-b border-white/5">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span class="font-display font-800 text-ink text-sm">F</span>
          </div>
          <span class="font-display font-700 text-lg tracking-tight">
            FreelanceHub
          </span>
        </div>

        <div class="hidden md:flex items-center gap-8">
          <a href="#" class="text-sm text-muted hover:text-soft transition-colors">
            How it Works
          </a>
          <a href="#" class="text-sm text-muted hover:text-soft transition-colors">
            Browse Jobs
          </a>
          <a href="#" class="text-sm text-muted hover:text-soft transition-colors">
            Pricing
          </a>
        </div>

        <div class="flex items-center gap-3">
          <template v-if="!auth.isAuthenticated">
            <button @click="showAuth = true" class="btn-outline text-sm px-4 py-2">
              Sign In
            </button>
            <button @click="showAuth = true" class="btn-primary text-sm px-4 py-2">
              Get Started
            </button>
            <AuthModal v-model="showAuth" />
          </template>
          <template v-else>
            <button @click="auth.logout();" class="btn-outline text-sm px-4 py-2">
              Sign Out
            </button>
          </template>
        </div>

      </div>
    </nav>

    <!-- ================= HERO with BACKGROUND ================= -->
    <section class="pt-32 pb-24 px-6 noise-bg relative">
      <!-- Optional overlay to make text more readable -->
      <div class="absolute inset-0 bg-black/50 pointer-events-none"></div>
      
      <div class="max-w-5xl mx-auto text-center relative z-10">

        <div class="inline-flex items-center gap-2 badge badge-open mb-6">
          <span class="w-2 h-2 rounded-full bg-accent animate-pulse-dot"></span>
          <span>1,200+ active projects this week</span>
        </div>

        <h1 class="font-display text-6xl md:text-7xl font-800 leading-[1.05] tracking-tight mb-6">
          Where talent meets
          <span class="block text-accent">opportunity.</span>
        </h1>

        <p class="text-muted text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          A modern platform connecting world-class freelancers with ambitious clients.
          Post projects, discover talent, and deliver great work — all in one place.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            @click="goToDashboard('client')"
            class="btn-primary px-8 py-3 text-base w-full sm:w-auto"
          >
            Hire a Freelancer →
          </button>

          <button
            @click="goToDashboard('freelancer')"
            class="btn-outline px-8 py-3 text-base w-full sm:w-auto"
          >
            Find Work
          </button>
        </div>

      </div>
    </section>

    <!-- ================= STATS ================= -->
    <section class="border-y border-border py-12 px-6">
      <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="s in stats" :key="s.label" class="text-center">
          <div class="font-display text-3xl font-700 text-accent">
            {{ s.value }}
          </div>
          <div class="text-muted text-sm mt-1">
            {{ s.label }}
          </div>
        </div>
      </div>
    </section>

    <!-- ================= FEATURED JOBS ================= -->
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">

        <div class="flex items-end justify-between mb-10">
          <div>
            <p class="text-accent text-sm font-display mb-2">
              OPEN OPPORTUNITIES
            </p>
            <h2 class="font-display text-4xl font-700">
              Featured Projects
            </h2>
          </div>

          <button
            @click="goToDashboard('freelancer')"
            class="btn-outline text-sm"
          >
            View All Jobs
          </button>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          <div
            v-for="job in featuredJobs"
            :key="job.id"
            class="card-hover p-6 rounded-2xl border border-border"
            style="background:#1A1A24;"
          >
            <div class="flex items-start justify-between mb-4">
              <div
                class="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                :style="`background:${job.color}20`"
              >
                {{ job.icon }}
              </div>
              <span class="badge badge-open">
                {{ job.type }}
              </span>
            </div>

            <h3 class="font-display font-600 text-base mb-1">
              {{ job.title }}
            </h3>

            <p class="text-muted text-sm mb-4">
              {{ job.company }}
            </p>

            <div class="flex flex-wrap gap-2 mb-5">
              <span
                v-for="tag in job.tags"
                :key="tag"
                class="badge"
                style="background:#2A2A38;color:#9090A8;border:none;font-size:11px;"
              >
                {{ tag }}
              </span>
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-border">
              <span class="font-display font-600 text-accent text-sm">
                {{ job.budget }}
              </span>

              <button
                @click="goToDashboard('freelancer')"
                class="text-xs text-muted hover:text-soft transition-colors"
              >
                Apply →
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- ================= HOW IT WORKS ================= -->
    <section class="py-20 px-6 bg-secondary">
      <div class="max-w-5xl mx-auto">

        <div class="text-center mb-14">
          <p class="text-accent text-sm font-display mb-2">
            HOW IT WORKS
          </p>
          <h2 class="font-display text-4xl font-700">
            Simple. Fast. Effective.
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(step, i) in howItWorks" :key="i">
            <div class="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
              <span class="font-display font-700 text-accent">
                {{ i + 1 }}
              </span>
            </div>

            <h3 class="font-display font-600 text-lg mb-2">
              {{ step.title }}
            </h3>

            <p class="text-muted text-sm leading-relaxed">
              {{ step.desc }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- ================= FOOTER ================= -->
    <footer class="border-t border-border py-8 px-6">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <div class="flex items-center gap-2">
          <div class="w-6 h-6 bg-accent rounded flex items-center justify-center">
            <span class="font-display font-800 text-ink text-xs">F</span>
          </div>
          <span class="font-display font-600 text-sm">
            FreelanceHub
          </span>
        </div>

        <p class="text-muted text-xs">
          © 2025 FreelanceHub. All rights reserved.
        </p>

      </div>
    </footer>

  </div>
</template>
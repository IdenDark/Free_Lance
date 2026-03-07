<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToAuth = () => {
  router.push('/auth')
}
</script>

<template>
  <div class="min-h-screen bg-ink text-soft">
    <nav class="p-6 flex justify-between">
      <h1 class="text-xl font-bold">FreelanceHub</h1>
      <button
        @click="goToAuth"
        class="bg-accent text-ink px-4 py-2 rounded"
      >
        Get Started
      </button>
    </nav>

    <section class="text-center mt-24">
      <h2 class="text-5xl font-bold mb-6">
        Where talent meets opportunity
      </h2>
      <p class="text-muted max-w-xl mx-auto">
        Modern freelance platform for clients and freelancers.
      </p>
    </section>
  </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

function loginAs(role) {
  auth.login(role)
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-ink">
    <div class="bg-card p-8 rounded-xl w-96">
      <h2 class="text-xl mb-6">Simulated Login</h2>

      <div class="space-y-3">
        <button
          @click="loginAs('client')"
          class="w-full bg-accent text-ink py-2 rounded"
        >
          Login as Client
        </button>

        <button
          @click="loginAs('freelancer')"
          class="w-full border py-2 rounded"
        >
          Login as Freelancer
        </button>

        <button
          @click="loginAs('admin')"
          class="w-full border py-2 rounded"
        >
          Login as Admin
        </button>
      </div>
    </div>
  </div>
</template>
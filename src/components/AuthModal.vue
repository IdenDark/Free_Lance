<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const authTab = ref('login')
const showAuth = defineModel() // if parent controls visibility

// Login fields
const loginEmail = ref('')
const loginPassword = ref('')
const loginRole = ref('client')

// Register fields
const registerName = ref('')
const registerEmail = ref('')
const registerPassword = ref('')
const registerRole = ref('client')

function handleLogin() {
  authStore.login(loginEmail.value, loginPassword.value, loginRole.value)
}

function handleRegister() {
  authStore.register(
    registerName.value,
    registerEmail.value,
    registerPassword.value,
    registerRole.value
  )
}
</script>

<template>
<div v-if="showAuth"      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">

  <div class="glass rounded-2xl p-8 w-full max-w-md relative animate-fade">

    <button @click="showAuth = false"
        class="absolute top-4 right-4 text-muted hover:text-soft text-xl">
      ✕
    </button>

    
    <!-- Header -->
    <div class="flex items-center gap-2 mb-8">
      <div class="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
        <span class="font-display font-800 text-ink text-sm">F</span>
      </div>
      <span class="font-display font-700">FreelanceHub</span>
    </div>

    <!-- Tabs -->
    <div class="flex gap-6 border-b border-border mb-8">
      <button
        @click="authTab='login'"
        :class="authTab==='login' ? 'tab-active' : 'tab-inactive'"
        class="pb-3 text-sm transition">
        Sign In
      </button>

      <button
        @click="authTab='register'"
        :class="authTab==='register' ? 'tab-active' : 'tab-inactive'"
        class="pb-3 text-sm transition">
        Create Account
      </button>
    </div>

    <!-- ================= LOGIN ================= -->
    <div v-if="authTab==='login'">

      <div class="space-y-4 mb-6">
        <div>
          <label class="text-xs text-muted block mb-1">Email</label>
          <input v-model="loginEmail" type="email"
                 class="input-field"
                 placeholder="you@company.com" />
        </div>

        <div>
          <label class="text-xs text-muted block mb-1">Password</label>
          <input v-model="loginPassword"
                 type="password"
                 class="input-field"
                 placeholder="••••••••" />
        </div>

        <div>
          <label class="text-xs text-muted block mb-1">Login As</label>
          <select v-model="loginRole" class="input-field">
            <option value="client">Client</option>
            <option value="freelancer">Freelancer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>

      <button @click="handleLogin"
              class="btn-primary w-full text-sm">
        Login →
      </button>

    </div>

    <!-- ================= REGISTER ================= -->
    <div v-if="authTab==='register'">

      <div class="space-y-4 mb-6">
        <input v-model="registerName"
               type="text"
               class="input-field"
               placeholder="Full Name" />

        <input v-model="registerEmail"
               type="email"
               class="input-field"
               placeholder="Email Address" />

        <select v-model="registerRole"
                class="input-field">
          <option value="client">Client — I want to hire</option>
          <option value="freelancer">Freelancer — I want to work</option>
        </select>

        <input v-model="registerPassword"
               type="password"
               class="input-field"
               placeholder="Password" />
      </div>

      <button @click="handleRegister"
              class="btn-primary w-full text-sm">
        Create Account →
      </button>

    </div>
  </div>
</div>

</template>
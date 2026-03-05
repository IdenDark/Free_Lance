import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = ref(false)
  const router = useRouter()

  function login(email, password, role) {
    // fake login simulation
    if (email && password) {
      user.value = {
        email,
        role
      }
      isAuthenticated.value = true
      router.push(`/${role}`)
    }
  }

  function register(name, email, password, role) {
    if (name && email && password) {
      user.value = {
        name,
        email,
        role
      }
      isAuthenticated.value = true
      router.push(`/${role}`)
    }
  }

  function logout() {
    user.value = null
    isAuthenticated.value = false
    router.push('/')
  }

  return { user, isAuthenticated, login, register, logout }
})
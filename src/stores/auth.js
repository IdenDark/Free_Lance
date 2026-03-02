import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()

  const user = ref(null)

  const isAuthenticated = computed(() => !!user.value)

  function login(role) {
    user.value = {
      name: role === 'client' ? 'Sarah Mitchell' :
            role === 'freelancer' ? 'Daniel Osei' :
            'Priya Nair',
            role
    }

    router.push(`/${role}`)
  }

  function logout() {
    user.value = null
    router.push('/')
  }

  return {
    user,
    isAuthenticated,
    login,
    logout
  }
})
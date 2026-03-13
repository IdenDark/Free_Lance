import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useAuthStore } from '@/stores/auth'
import './style.css'
import { useTheme } from './composables/useTheme'

// initialize theme once (useTheme module already runs, but explicit call ensures it before components)
useTheme()

const app = createApp(App)

app.use(createPinia())
app.use(router)

// load persisted auth state (if any)
const auth = useAuthStore()
auth.loadUser()

app.mount('#app')
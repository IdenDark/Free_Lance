import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'
import { useTheme } from './composables/useTheme'

// initialize theme once (useTheme module already runs, but explicit call ensures it before components)
useTheme()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
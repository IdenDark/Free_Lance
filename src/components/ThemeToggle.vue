<template>
  <button
    @click="toggle"
    :aria-label="label"
    class="p-2 rounded-lg hover:bg-accent/10 transition-colors text-muted hover:text-accent"
  >
    <svg
      v-if="theme === 'dark'"
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M18.364 18.364l-1.414-1.414M6.05 6.05L4.636 7.464M12 8a4 4 0 100 8 4 4 0 000-8z"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646a7 7 0 1011.708 11.708z"
      />
    </svg>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()
const toggle = () => toggleTheme()
const label = computed(() =>
  theme.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
)
</script>

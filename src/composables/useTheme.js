import { ref, watch } from 'vue'

// reactive theme value ('light' | 'dark')
const theme = ref('dark')

function applyClass() {
  const root = document.documentElement
  if (theme.value === 'light') {
    root.classList.add('light')
    root.classList.remove('dark')
  } else {
    root.classList.remove('light')
    root.classList.add('dark')
  }
}

function loadTheme() {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') {
    theme.value = stored
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    theme.value = 'light'
  }
  applyClass()

  // keep in sync with system preference when user hasn't explicitly chosen
  const mql = window.matchMedia('(prefers-color-scheme: light)')
  mql.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      theme.value = e.matches ? 'light' : 'dark'
    }
  })
}

watch(theme, (newVal) => {
  applyClass()
  try {
    localStorage.setItem('theme', newVal)
  } catch {} // ignore quota errors
})

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

function setTheme(val) {
  if (val === 'light' || val === 'dark') theme.value = val
}

// initialize immediately
if (typeof window !== 'undefined') {
  loadTheme()
}

export function useTheme() {
  return { theme, toggleTheme, setTheme }
}

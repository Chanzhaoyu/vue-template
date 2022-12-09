import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useDark } from '@vueuse/core'

export const useAppStore = defineStore('counter', () => {
  const isDark = useDark()

  const theme = ref<'light' | 'dark'>(isDark.value ? 'dark' : 'light')

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return { theme, toggleTheme }
})

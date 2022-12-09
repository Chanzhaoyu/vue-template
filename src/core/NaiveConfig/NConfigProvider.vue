<template>
  <NConfigProvider
    class="h-full"
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="theme"
    :theme-overrides="!isDark ? lightThemeOverwrite : darkThemeOverwrite"
    preflight-style-disabled
    inline-theme-disabled
  >
    <NLayerProvider>
      <slot></slot>
    </NLayerProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import type { GlobalThemeOverrides } from 'naive-ui'
import { NConfigProvider, darkTheme, zhCN, dateZhCN } from 'naive-ui'
import NLayerProvider from './NLayerProvider.vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

const osTheme = computed(() => appStore.theme)

const theme = computed(() => (osTheme.value === 'dark' ? darkTheme : null))

const isDark = computed(() => osTheme.value === 'dark')

const lightThemeOverwrite: GlobalThemeOverrides = {
  common: {
    successColor: '#60b154',
    successColorHover: '#4f9346',
    successColorPressed: '#3e7538',

    infoColor: '#2962f1',
    infoColorHover: '#2960cf',
    infoColorPressed: '#1f4ead',

    warningColor: '#ed8e34',
    warningColorHover: '#c46d28',
    warningColorPressed: '#9c501c',

    errorColor: '#e54b32',
    errorColorHover: '#c43826',
    errorColorPressed: '#a3281c',
  },
}

const darkThemeOverwrite: GlobalThemeOverrides = {
  common: {
    successColor: '#77c06e',
    successColorHover: '#92cf8b',
    successColorPressed: '#b2dfad',

    infoColor: '#6aa7f8',
    infoColorHover: '#8ebffa',
    infoColorPressed: '#b2d6fb',

    warningColor: '#f3b259',
    warningColorHover: '#f6c97f',
    warningColorPressed: '#f9dea8',

    errorColor: '#eb7a62',
    errorColorHover: '#ef9e88',
    errorColorPressed: '#f3c1af',
  },
}
</script>

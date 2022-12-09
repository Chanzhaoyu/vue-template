<template>
  <NConfigProvider
    class="h-full"
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="themeOverrides"
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
import { NConfigProvider, zhCN, dateZhCN } from 'naive-ui'
import NLayerProvider from './NLayerProvider.vue'

const themeOverrides: GlobalThemeOverrides = {
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
</script>

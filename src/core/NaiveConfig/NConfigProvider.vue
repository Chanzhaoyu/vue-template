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
    infoColor: '#2962f1',
    warningColor: '#ed8e34',
    errorColor: '#e54b32',
  },
}
</script>

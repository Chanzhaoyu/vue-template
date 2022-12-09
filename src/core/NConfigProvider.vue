<template>
  <NConfigProvider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="themeOverrides"
    preflight-style-disabled
    inline-theme-disabled
  >
    <NMessageProvider>
      <slot></slot>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import type { GlobalThemeOverrides } from 'naive-ui'
import { NConfigProvider, zhCN, dateZhCN, NMessageProvider } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    successColor: '#60b154',
    infoColor: '#2962f1',
    warningColor: '#ed8e34',
    errorColor: '#e54b32',
  },
}
</script>

<template>
  <NConfigProvider
    :locale="zhCN"
    :date-locale="dateZhCN"
    preflight-style-disabled
    inline-theme-disabled
  >
    <NMessageProvider>
      <slot></slot>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { NConfigProvider, zhCN, dateZhCN, NMessageProvider } from "naive-ui";
</script>

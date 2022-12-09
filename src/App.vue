<template>
  <NConfigProvider
    :locale="zhCN"
    :date-locale="dateZhCN"
    preflight-style-disabled
  >
    <RouterView />
  </NConfigProvider>
</template>

<script setup lang="ts">
import { NConfigProvider, zhCN, dateZhCN } from "naive-ui";
</script>

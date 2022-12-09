<template>
  <NConfigProvider>
    <RouterView />
  </NConfigProvider>
</template>

<script setup lang="ts">
import NConfigProvider from '@/core/NaiveConfig/NConfigProvider.vue'
</script>

<template>
  <NConfigProvider>
    <RouterView />
  </NConfigProvider>
</template>

<script setup lang="ts">
import NConfigProvider from "@/core/NConfigProvider.vue";
</script>

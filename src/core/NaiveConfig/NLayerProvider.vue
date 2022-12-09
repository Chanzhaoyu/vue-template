<template>
  <NDialogProvider>
    <NNotificationProvider>
      <NMessageProvider>
        <slot></slot>
      </NMessageProvider>
    </NNotificationProvider>
  </NDialogProvider>
</template>

<script lang="ts" setup>
import { NDialogProvider, NNotificationProvider, NMessageProvider } from 'naive-ui'
</script>

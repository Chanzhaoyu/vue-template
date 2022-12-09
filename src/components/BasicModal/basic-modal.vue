<template>
  <NModal
    v-model:show="visible"
    :preset="preset"
    :title="title"
    :style="getStyle"
    @close="handleClose"
    @mask-click="handleClose"
  >
    <div class="h-full">
      <slot></slot>
    </div>
    <template #footer>
      <div class="flex justify-end items-center space-x-4">
        <NButton :loading="cancelLoading" @click="handleClose">取消</NButton>
        <NButton :loading="okLoading" type="primary" @click="handleConfirm"> 确定 </NButton>
      </div>
    </template>
  </NModal>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'

const props = withDefaults(
  defineProps<{
    open: boolean
    title?: string
    preset?: 'dialog' | 'confirm' | 'card'
    width?: string | number
    okLoading?: boolean
    cancelLoading?: boolean
  }>(),
  {
    title: '弹窗',
    preset: 'card',
    width: 560,
  }
)

const emit = defineEmits<{
  (e: 'update:open', visible: boolean): void
  (e: 'onClose'): void
  (e: 'onConfirm'): void
  (e: 'onCancel'): void
}>()

const visible = ref(props.open ?? false)

watch(
  () => props.open,
  (value) => {
    if (visible.value !== value) {
      visible.value = value
    }
  },
  {
    immediate: true,
  }
)

const getStyle = computed<CSSProperties>(() => {
  return {
    width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  }
})

const setVisible = (value: boolean = false) => {
  emit('update:open', value)
  visible.value = value
}

const handleConfirm = () => {
  emit('onConfirm')
}

const handleClose = () => {
  setVisible(false)
  emit('onCancel')
  emit('onClose')
}
</script>

<script lang="ts">
export default {
  name: 'BasicModal',
  inheritAttrs: false,
}
</script>

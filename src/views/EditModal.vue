<template>
  <NModal
    title="编辑"
    preset="card"
    v-model:show="visible"
    style="width: 500px"
    @close="handleCancel"
  >
    <div>
      <h1>This is edit modal main</h1>
    </div>
    <template #footer>
      <div class="flex justify-end items-center space-x-4">
        <NButton @click="handleCancel">取消</NButton>
        <NButton type="primary" @click="handleConfirm">确定</NButton>
      </div>
    </template>
  </NModal>
</template>

<script setup lang="ts">
import { NModal, NButton } from "naive-ui";
import { ref, watch } from "vue";

const props = defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  (e: "update:open", visible: boolean): void;
  (e: "onCancel"): void;
  (e: "onConfirm"): void;
}>();

const visible = ref(props.open ?? false);

watch(
  () => props.open,
  (value) => {
    if (visible.value !== value) {
      visible.value = value;
    }
  },
  {
    immediate: true,
  }
);

const setVisible = (value: boolean = false) => {
  emit("update:open", value);
  visible.value = value;
};

const handleConfirm = () => {
  setVisible(false);
  emit("onConfirm");
};

const handleCancel = () => {
  setVisible(false);
  emit("onCancel");
};
</script>

<template>
  <BasicModal
    v-model:open="visible"
    @onConfirm="handleConfirm"
    @onCancel="handleCancel"
  >
    <div>Hello World</div>
  </BasicModal>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { BasicModal } from "@/components";

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
  emit("onConfirm");
};

const handleCancel = () => {
  setVisible(false);
  emit("onCancel");
};
</script>

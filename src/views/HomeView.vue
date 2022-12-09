<template>
  <div class="p-4">
    <div>
      <NButton @click="handleClick">Open Modal</NButton>
      <Suspense v-if="show">
        <template #default>
          <ImportEditModal v-model:open="visible" />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
import { useAsyncComponent } from "@/hooks/useAsyncComponent";

const show = ref<boolean>(false);
const visible = ref<boolean>(false);

const ImportEditModal = useAsyncComponent(() => import("./EditModal.vue"));

const handleClick = () => {
  show.value = true;
  visible.value = true;
};
</script>

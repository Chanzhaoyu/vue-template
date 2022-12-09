<template>
  <div class="p-4">
    <div class="space-x-4">
      <NButton type="primary" @click="handleClick">获取数据</NButton>
      <NButton type="primary" @click="open = true">Open Modal</NButton>
      <NButton type="primary" @click="handleToast">Open Toast</NButton>
    </div>
    <Suspense>
      <main class="mt-4">
        <AsyncComponent />
      </main>
      <template #fallback>
        <NSpin></NSpin>
      </template>
    </Suspense>
    <EditModal ref="modalRef" v-model:open="open" />
  </div>
</template>

<script setup lang="ts">
import EditModal from "./EditModal.vue";

const AsyncComponent = defineAsyncComponent(
  () => import("./AsyncComponent.vue")
);

const message = useMessage();

const modalRef = ref<InstanceType<typeof EditModal> | null>(null);

const open = ref<boolean>(false);

const handleClick = () => {
  console.log(modalRef.value?.setVisible);
};

const handleToast = () => {
  message.success("hello message");
};
</script>

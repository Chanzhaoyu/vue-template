<template>
  <div class="p-4">
    <NButton type="primary" @click="handleClick">获取数据</NButton>

    <Suspense v-if="visible">
      <main class="mt-4">
        <AsyncComponent />
      </main>
      <template #fallback>
        <NSpin></NSpin>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
const AsyncComponent = defineAsyncComponent(
  () => import("./AsyncComponent.vue")
);

const visible = ref<boolean>(false);

const handleClick = () => {
  visible.value = true;
};
</script>

<template>
  <div class="p-4">
    <div class="space-x-4">
      <NButton type="primary" @click="handleClick">动态加载组件获取数据</NButton>
      <NButton type="primary" @click="open = true">Open Modal</NButton>
      <NButton type="primary" @click="handleToast">Open Toast</NButton>
      <NButton type="error" @click="handleError">错误弹窗</NButton>
    </div>
    <div>
      <Suspense v-if="show">
        <main class="mt-4">
          <AsyncComponent />
        </main>
        <template #fallback>
          <NSpin></NSpin>
        </template>
      </Suspense>
    </div>
    <div class="my-4">
      <n-space vertical :size="12">
        <n-alert title="Default 类型" type="default">
          <template #icon>
            <n-icon>
              <ios-airplane />
            </n-icon>
          </template>
          Gee it's good to be back home
        </n-alert>
        <n-alert title="Info 类型" type="info"> Gee it's good to be back home </n-alert>
        <n-alert title="Success 类型" type="success">
          Leave it till tomorrow to unpack my case
        </n-alert>
        <n-alert title="Warning 类型" type="warning"> Honey disconnect the phone </n-alert>
        <n-alert title="Error 类型" type="error"> I'm back in the U.S.S.R. </n-alert>
      </n-space>
    </div>

    <EditModal ref="modalRef" v-model:open="open" />
  </div>
</template>

<script setup lang="ts">
import EditModal from '../EditModal.vue'
import { IosAirplane } from '@vicons/ionicons4'

const AsyncComponent = defineAsyncComponent(() => import('../AsyncComponent.vue'))

const message = useMessage()
const dialog = useDialog()

const modalRef = ref<InstanceType<typeof EditModal> | null>(null)

const show = ref<boolean>(false)

const open = ref<boolean>(false)

const handleClick = () => {
  show.value = true
  console.log(modalRef.value?.setVisible)
}

const handleToast = () => {
  message.success('hello message')
}

const handleError = () => {
  dialog.error({
    title: '错误',
    content: '错了',
    positiveText: 'Oops!',
  })
}
</script>

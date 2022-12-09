import type { AsyncComponentLoader } from 'vue'
import { defineAsyncComponent, h } from 'vue'

export function useAsyncComponent<T = any>(source: AsyncComponentLoader<T>) {
  return defineAsyncComponent({
    loader: source,
    loadingComponent: h('div', 'loading...'),
    errorComponent: h('div', 'error'),
    timeout: 3000,
  })
}

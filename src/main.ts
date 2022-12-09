import './styles/lib/tailwind.css'
import './styles/index.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createNaiveMeta } from './core/NaiveConfig/style-inject'

const app = createApp(App)

app.use(createPinia())
app.use(router)
createNaiveMeta()
app.mount('#app')

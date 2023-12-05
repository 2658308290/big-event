import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Persist from 'pinia-plugin-persistedstate'

import '@/assets/main.scss'
const app = createApp(App)

app.use(createPinia().use(Persist))
app.use(router)

app.mount('#app')

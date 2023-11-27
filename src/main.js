import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AppLink from '@/components/AppLink.vue'

const app = createApp(App).component('AppLink', AppLink)

app.use(router)

app.mount('#app')

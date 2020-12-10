import { createApp } from 'vue'
import './registerServiceWorker'
import router from '@/router/router'
import App from './App.vue'
import "./assets/styles/index.scss"

const app = createApp(App)
app.use(router)

app.mount('#app')

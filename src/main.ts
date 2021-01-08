import { createApp } from 'vue'
import './registerServiceWorker'
import router from '@/router/router'
import App from './App.vue'
import "alertifyjs/build/css/alertify.css"
import "alertifyjs/build/css/themes/semantic.css"
import "alertifyjs/build/alertify"
import "./assets/styles/index.scss"

const app = createApp(App)
app.use(router)

app.mount('#app')

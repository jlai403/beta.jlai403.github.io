import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style.css'
import 'font-awesome/css/font-awesome.css'

const app = createApp(App)

app.use(router)

app.mount('#root')

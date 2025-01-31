import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

import 'sweetalert2/dist/sweetalert2.min.css'
import { MotionPlugin } from '@vueuse/motion'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(MotionPlugin)
app.use(createPinia())
app.use(router)
app.mount('#app')




// import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// not needed to specify the index.js file as it automaticaly looks for that
import router from '@/router'

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')

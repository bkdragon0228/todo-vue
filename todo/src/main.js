import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueQueryPlugin } from 'vue-query'

import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App)
  .use(pinia)
  .use(store)
  .use(router)
  .use(VueQueryPlugin)
  .mount('#app')

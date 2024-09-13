import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Verifique o caminho para o arquivo de configuração do router

createApp(App)
  .use(router)
  .mount('#app')

import '/src/assets/css/light-colors.css';
import '/src/assets/css/dark-colors.css';
import '/src/assets/fonts/fonts.css';
import '/src/assets/css/tokens.css';
import '/src/assets/css/atoms.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

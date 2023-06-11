import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/style/main.scss'
const app = createApp(App)

app.use(createPinia())
app.use(router)

import Loader from "@/components/UI/Loader.vue";
import BtnMore from "@/components/UI/BtnMore.vue";

app.component('Loader', Loader)
app.component('BtnMore', BtnMore)


app.mount('#app')

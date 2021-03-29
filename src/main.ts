import { createApp } from 'vue'
import App from './App.vue'
import globalComponents from "./global-components";
import './index.css'

const app = createApp(App);

globalComponents(app);

app.mount('#app')

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as Icons from '@element-plus/icons-vue' 

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
for (let i in Icons) {
    app.component(i, Icons[i])
}
app.mount('#app')

import { createSSRApp, createApp } from 'vue'
import router from './router'
import pinia from './store'
import App from './components/App'

const app = typeof window === 'undefined' ? createSSRApp(App) : createApp(App)

app.use(router).use(pinia)

export default app

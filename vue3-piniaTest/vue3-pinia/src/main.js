import { createApp } from 'vue';
import { createPinia } from 'pinia';
import persist from 'pinia-plugin-persistedstate';
import App from './App.vue';

const app = createApp(App);

// 创建 Pinia 实例
const pinia = createPinia();

// 将 Pinia 挂载到 Vue 应用中
app.use(pinia);

app.use(createPinia().use(persist))

app.mount('#app');
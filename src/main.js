import { createApp } from 'vue';
import App from './App.vue';
import { router } from "../route.js";
import "bootstrap";

createApp(App).use(router).mount('#app')

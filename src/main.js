import { createApp } from 'vue'
import Router from "@/components/routes/index.js";
import App from '@/components/Module2/Login_Page.vue';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';

const app = createApp(App);
app.use(Router);
app.use(bootstrap);
app.mount('#app');
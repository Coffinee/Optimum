
import { createApp } from 'vue'
import Router from "@/components/routes/index.js";
import App from "@/components/Login/Landing.vue";
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';
const app = createApp(App);
app.use(Router);
app.use (bootstrap);
app.mount('#app');


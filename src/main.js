
import { createApp } from 'vue';
import App from "@/components/Module1/Landing.vue";
import Router from "@/components/routes/index.js";
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';




const app = createApp(App);
app.use(Router);
app.use(bootstrap);

app.mount('#app');


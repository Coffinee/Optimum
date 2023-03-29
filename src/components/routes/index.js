import { createRouter, createWebHistory } from "vue-router"
// Import your newly created layout using 'Var_Name' from '@/path'
import Module1_1 from '@/components/Module1/Landing.vue';
import Module1_2 from '@/component/Module1/Remittance-Inquiry';

// import { createApp } from "vue";

//create a const routes and insert your path,name,component
const routes = [
    {
        path: '/',
        name: 'landing',
        component: Module1_1
    },
    {
        path: '/',
        name: 'landing',
        component: Module1_2
    },
]

//create a const router and add history and routes
const router = createRouter({
    history: createWebHistory(),
    routes,
});

//Route.before Each
router.beforeEach((to, from, next) => {
    next();
   // document.title = to.meta.title;
    // if (to.meta.middleware == "guest") {
    //     if (userAuthStore().authenticated) {
    //         next({ name: "Home" });
    //     }
    //     next();
    // } else {
    //     next();
    // }
});
//Don't forget to export default router
export default router;

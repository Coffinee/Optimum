import { createRouter, createWebHistory } from "vue-router";
import LoginPage from '@/components/Module2/Login_Page.vue'
// import { createApp } from "vue";

const routes = [
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

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
export default router;


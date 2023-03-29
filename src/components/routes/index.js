import { createRouter, createWebHistory } from "vue-router"
import Landing from '@/components/Module1/Landing.vue';
import RemittanceInquiry from '../Module1/RemittanceInquiry.vue';


//create a const routes and insert your path,name,component
const routes = [
    {
        path: '/',
        name: 'landing',
        component: Landing
    },
    {
        path: '/remittance',
        name: 'RemittanceInquiry',
        component: RemittanceInquiry
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

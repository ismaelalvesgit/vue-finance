import * as VueRouter from 'vue-router';
import Home from './views/Home.vue'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Home
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
    }
});

export default router;
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        name: 'Home',
        path: '/',
        component: () => import('../pages/Home.vue')
    },
    {
        name: 'Auth',
        path: '/auth',
        component: () => import('../pages/Auth.vue')
    },
    {
        name: 'Chat',
        path: '/chat',
        component: () => import('../pages/Chat.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../pages/PageNotFound.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router

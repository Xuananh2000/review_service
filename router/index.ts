import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/pages/main/index.vue'),
    },
];

export default routes;
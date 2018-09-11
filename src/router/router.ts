import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/PageHome.vue';
import PageThreadShow from '@/pages/PageThreadShow.vue';
import PageNotFound from '@/pages/PageNotFound.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/thread/:id',
        name: 'PageThreadShow',
        component: PageThreadShow,
        props: true
    },
    {
        path: '*',
        name: 'NotFound',
        component: PageNotFound
    }
];

// eslint-disable-next-line no-new
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;

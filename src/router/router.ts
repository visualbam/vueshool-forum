import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/PageHome.vue';
import PageThreadShow from '@/pages/PageThreadShow.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/thread/:id',
        name: 'PageThreadShow',
        component: PageThreadShow,
        props: true
    }
];

// eslint-disable-next-line no-new
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/PageHome.vue';
import PageForum from '@/pages/PageForum.vue';
import PageThreadShow from '@/pages/PageThreadShow.vue';
import PageNotFound from '@/pages/PageNotFound.vue';
import PageCategory from '@/pages/PageCategory.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'PageHome',
        component: Home
    },
    {
        path: '/category/:id',
        name: 'PageCategory',
        component: PageCategory,
        props: true
    },
    {
        path: '/thread/:id',
        name: 'PageThreadShow',
        component: PageThreadShow,
        props: true
    },
    {
        path: '/forum/:id',
        name: 'PageForum',
        component: PageForum,
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

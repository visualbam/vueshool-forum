import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import Home from '@/views/Home';
const routes = [{ path: '/', component: Home }];

// eslint-disable-next-line no-new
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

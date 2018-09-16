import Vue from 'vue';
import Vuex from 'vuex';
import sourceData from '@/data.json';

Vue.use(Vuex);

export default new Vuex.Store({
    state: { ...sourceData, authId: 'jUjmgCurRRdzayqbRMO7aTG9X1G2' },
    getters: {
        authUser(state) {
            return state.users[state.authId];
        }
    },
    mutations: {
        setPost(state, { post, postId }) {
            Vue.set(state.posts, postId, post);
        },
        appendPostToThread(state, { postId, threadId }) {
            const threads = state.threads[threadId];
            Vue.set(threads.posts, postId, postId);
        },
        appendPostToUser(state, { post, postId }) {
            const user = state.users[post.userId];
            Vue.set(user.posts, postId, postId);
        }
    },
    actions: {
        createPost(context, post) {
            const postId = 'greatPost' + Math.random();
            post['.key'] = postId;

            context.commit('setPost', { post, postId });
            context.commit('appendPostToThread', { threadId: post.threadId, postId });
            context.commit('appendPostToUser', { userId: post.userId, postId });
        }
    }
});

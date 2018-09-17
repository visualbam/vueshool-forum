import Vue from 'vue';
import Vuex from 'vuex';
import sourceData from '@/data.json';

Vue.use(Vuex);

export default new Vuex.Store({
    state: { ...sourceData, authId: 'u4r8XCziZEWEXsj2UIKNHBoDh0n2' },
    getters: {
        authUser(state) {
            return state.users[state.authId];
        }
    },
    mutations: {
        setPost({ posts }, { post, postId }) {
            Vue.set(posts, postId, post);
        },
        appendPostToThread({ threads }, { postId, threadId }) {
            const thread = threads[threadId];
            Vue.set(thread.posts, postId, postId);
        },
        appendPostToUser({ users }, { post, postId }) {
            const user = users[post.userId];
            Vue.set(user.posts, postId, postId);
        }
    },
    actions: {
        createPost({ commit, state }, post) {
            const postId = 'greatPost' + Math.random();
            post['.key'] = postId;
            post.userId = state.authId;
            post.publishedAt = Math.round(Date.now() / 1000);

            commit('setPost', { post, postId });
            commit('appendPostToThread', { threadId: post.threadId, postId });
            commit('appendPostToUser', { userId: post.userId, postId });
        }
    }
});

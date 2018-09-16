import Vue from 'vue';
import Vuex from 'vuex';
import sourceData from '@/data.json';

Vue.use(Vuex);

// public addPost ({ post }) {
//     const postId = post['.key']
//     this.$set(this.$store.state.posts, postId, post);
//     this.$set(this.thread.posts, postId, postId);
//     this.$set(this.$store.state.users[post.userId].posts, postId, postId);
// }

export default new Vuex.Store({
    state: sourceData,
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

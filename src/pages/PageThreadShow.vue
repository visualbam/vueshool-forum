<template>
    <div class="threads-container">
        <h1>{{thread.title}}</h1>
        <PostList :posts="posts" />
        <PostEditor @save="addPost" :threadId="id" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
    import PostList from '@/components/PostList.vue';
    import PostEditor from '@/components/PostEditor.vue';
    import sourceData from '@/data.json';

    @Component({
    name: 'PageThreadShow',
    components: { PostList, PostEditor }
})
export default class PageThreadShow extends Vue {
    @Prop({ required: true, type: String }) public id!: string;
    public threads: any = sourceData.threads;

    get thread() { return this.threads[this.id] }

    get posts() {
        const postIds = Object.values(this.thread.posts);
        return Object.values(sourceData.posts)
            .filter(post => postIds.includes(post['.key']))
    }

    public addPost(event) {
        const post = event.post;
        const postId = event.post['.key'];
        this.$set(sourceData.posts, postId, post);
        this.$set(this.thread.posts, postId, postId);
        this.$set(sourceData.users[post.userId], postId, postId);
    }
}
</script>
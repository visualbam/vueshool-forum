<template>
    <div class="threads-container">
        <h1>{{thread.title}}</h1>
        <PostList :posts="posts" />
        <PostEditor :id="id" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
    import sourceData from '@/data.json';
    import PostList from '@/components/PostList';
    import PostEditor from '@/components/PostEditor';

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
}
</script>
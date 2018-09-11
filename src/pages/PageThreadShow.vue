<template>
    <div class="threads-container">
        <h1>{{thread.title}}</h1>
        <PostList :posts="posts" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import sourceData from '@/data.json';
import PostList from '@/components/PostList';

@Component({
    name: 'PageThreadShow',
    components: { PostList }
})
export default class PageThreadShow extends Vue {
    @Prop({ required: true, type: String }) public id!: string;
    get thread() { return this.threads[this.id] }
    public threads: any = sourceData.threads;

    get posts() {
        const postIds = Object.values(this.thread.posts);
        return Object.values(sourceData.posts)
            .filter(post => postIds.includes(post['.key']))
    }
}
</script>
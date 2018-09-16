<template>
    <div class="threads-container">
        <h1>{{thread.title}}</h1>
        <p>
            By <a href="" class="link-unstyled">Robin</a>, <AppDate :timestamp="thread.publishedAt" />
            <span class="hide-module text-faded text-small" style="float: right; margin-top: 2px">
                3 replies by 3 contributors
            </span>
        </p>
        <PostList :posts="posts" />
        <PostEditor :threadId="id" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
    import PostList from '@/components/PostList.vue';
    import PostEditor from '@/components/PostEditor.vue';

    @Component({
    name: 'PageThreadShow',
    components: { PostList, PostEditor }
})
export default class PageThreadShow extends Vue {
    @Prop({ required: true, type: String }) public id!: string;
    public threads: any = this.$store.state.threads;

    get thread() { return this.threads[this.id] }

    get posts () {
        const postIds = Object.values(this.thread.posts);
        return Object.values(this.$store.state.posts)
            .filter(post => postIds.includes(post['.key']))
    }
}
</script>
<template>
    <div class="post-editor">
        <form action="" @submit.prevent="addPost">
            <div class="form-group">
                <textarea
                        v-model="newPostText"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        class="form-input">
                </textarea>
            </div>
            <div class="form-actions">
                <button class="btn-blue">Submit post</button>
            </div>
        </form>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import sourceData from '@/data.json';

@Component({
    name: 'PostEditor'
})
export default class PostEditor extends Vue {
    @Prop() public id;
    public newPostText: string= '';
    public threads: any = sourceData.threads;
    get thread() { return this.threads[this.id] }

    public addPost() {
        const postId = 'greatPost' + Math.random();
        const post = {
            '.key': postId,
            text: this.newPostText,
            publishedAt: Math.round(Date.now() / 1000),
            threadId: this.id,
            userId: 'HJNTR1nN8tgbB148RJrPYbby8Vl1',
        };

        this.$set(sourceData.posts, postId, post);
        this.$set(this.thread.posts, postId, postId);
        this.$set(sourceData.users[post.userId].posts, postId, postId);
        this.newPostText = '';

        this.$emit('save-post', { post })
    }
}
</script>
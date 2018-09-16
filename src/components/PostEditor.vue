<template>
    <div class="post-editor">
        <form action="" @submit.prevent="save">
            <div class="form-group">
                <textarea
                        v-model="newPostText"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        class="form-input"
                        title="">
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

@Component({
    name: 'PostEditor'
})
export default class PostEditor extends Vue {
    @Prop({ required: true, type: String }) public threadId;
    public newPostText: string = '';
    public threads: any = this.$store.state.threads;
    get thread() { return this.threads[this.threadId] }

    public save() {
        const postId = 'greatPost' + Math.random();
        const post = {
            text: this.newPostText,
            publishedAt: Math.round(Date.now() / 1000),
            threadId: this.threadId,
            userId: 'jUjmgCurRRdzayqbRMO7aTG9X1G2',
            '.key': postId,
        };
        this.newPostText = '';
        this.$emit('save', { post })
        this.$store.dispatch('createPost', post);
    }
}
</script>
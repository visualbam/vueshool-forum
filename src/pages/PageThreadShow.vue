<template>
    <div class="threads-container">
        <h1>{{thread.title}}</h1>
        <div class="post-list">
            <div class="post" v-for="postId in threads[id].posts">
                <div class="user-info">
                    <a href="#" class="user-name">{{users[posts[postId].userId].name}}</a>
                    <a href="#">
                        <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt="">
                    </a>
                    <p class="desktop-only text-small">107 posts</p>
                </div>
                <div class="post-content">
                    {{posts[postId].text}}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import sourceData from '@/data.json';

@Component({
    name: 'PageThreadShow'
})
export default class PageThreadShow extends Vue {
    @Prop({ required: true, type: String }) public id!: string;
    get thread() { return this.threads[this.id] }
    public threads: any = sourceData.threads;
    public posts: any = sourceData.posts;
    public users: any = sourceData.users;
}
</script>
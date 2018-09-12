<template>
    <div class="post">
        <div class="user-info">
            <a href="#" class="user-name">{{user.name}}</a>
            <a href="#">
                <img class="avatar-large" :src="user.avatar" alt="">
            </a>
            <p class="desktop-only text-small">{{userPostsCount}} posts</p>
        </div>
        <div class="post-content">
            {{post.text}}
        </div>
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import sourceData from '@/data.json';

    @Component({
        name: 'PostListItem'
    })
    export default class ThreadList extends Vue {
        @Prop({ required: true, type: Object }) public post!: any;

        get user() {
            return sourceData.users[this.post.userId];
        }
        get userPostsCount() {
            return Object.keys(this.user.posts).length;
        }
    }
</script>
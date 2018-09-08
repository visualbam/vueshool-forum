<template>
    <div class="threads-container">
        <div class="thread-list col-large push-top" v-for="thread in threads">
            <h1>{{thread.title}}</h1>
            <div class="post-list">
                <div class="post" v-for="postId in thread.posts">
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
                    <!--<div class="post-data text-faded">-->
                        <!--{{posts[postId].publishedAt}}-->
                    <!--</div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import sourceData from '@/data';
@Component
export default class HelloWorld extends Vue {
    private threads: any = sourceData.threads;
    private posts: any = sourceData.posts;
    private users: any = sourceData.users;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>

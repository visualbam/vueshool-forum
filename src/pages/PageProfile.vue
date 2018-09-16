<template>
    <div class="profile-page">
        <div class="flex-grid">
            <div class="col-3 push-top">
                <div class="profile-card">
                    <p class="text-center">
                        <img :src="user.avatar" alt="" class="avatar-xlarge">
                    </p>

                    <h1>{{user.username}}</h1>
                    <p class="text-lead">{{user.name}}</p>
                    <p class="text-justify">
                        <span v-if="user.bio">{{user.bio}}</span>
                        <span v-else=>No bio specified</span>
                    </p>
                    <span class="online">{{user.username}} is online</span>

                    <div class="stats">
                        <span>{{userPostsCount}} posts</span>
                        <span>{{userThreadsCount}} threads</span>
                    </div>

                    <hr>

                    <p v-if="user.website" class="text-large text-center">
                        <i class="fa fa-globe"></i>
                        <a :href="user.website">{{user.website}}</a>
                    </p>
                </div>

                <p class="text-xsmall text-faded text-center">Member since june 2003, last visited 5 hours ago</p>

                <div class="text-center">
                    <hr>
                    <a href="#" class="btn-green btn-small">Edit profile</a>
                </div>
            </div>

            <div class="col-7 push-top">
                <div class="profile-header">
                    <span class="text-lead">Jokers recent activity</span>
                    <a href="#">See only started threads</a>
                </div>
                <hr>
                <PostList :posts="userPosts" />
            </div>

        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { mapGetters } from 'vuex';
    import PostList from '@/components/PostList.vue'
    import { countObjectProperties } from '@/utils';


    @Component({
        name: 'PageProfile',
        components: { PostList },
        computed: {
            ...mapGetters({ 'user': 'authUser' })
        }
    })
    export default class PageProfile extends Vue {
        public user: any;

        get userThreadsCount() {
            return countObjectProperties(this.user.threads);
        }

        get userPostsCount() {
            return countObjectProperties(this.user.posts);
        }

        get userPosts() {
            if (this.user.posts) {
                return Object.values(this.$store.state.posts).filter((post: any) => post.userId === this.user['.key'])
            }
            return [];
        }
    };
</script>

<style scoped>

</style>
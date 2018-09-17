<template>
    <div class="profile-page">
        <div class="flex-grid">
            <UserProfileCard
                    :user-posts-count="userPostsCount"
                    :user-threads-count="userThreadsCount"
                    :user="user"/>

            <div class="col-7 push-top">
                <div class="profile-header">
                    <span class="text-lead">{{user.username}} recent activity</span>
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
    import PostList from '@/components/posts/PostList.vue'
    import { countObjectProperties } from '@/utils';
    import UserProfileCard from '@/components/user-profile/UserProfileCard.vue';


    @Component({
        name: 'PageProfile',
        components: { UserProfileCard, PostList },
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


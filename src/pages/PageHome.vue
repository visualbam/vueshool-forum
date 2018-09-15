<template>
    <div class="home col-full">
        <h1>Welcome to the forum</h1>
        <ForumList :forums="forums"/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ForumList from '@/components/ForumList.vue';
    import  sourceData from '@/data.json';

    @Component({
        components: { ForumList }
    })
    export default class Home extends Vue {
        public forums: any = Object.values(sourceData.forums);
        public posts: any = sourceData.posts;
        public users: any = sourceData.users;
    }
</script>

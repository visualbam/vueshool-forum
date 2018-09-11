<template>
    <div class="home col-full">
        <h1>Welcome to the forum</h1>
        <ThreadList :threads="threads"/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import _ from 'lodash';
    import ThreadList from '@/components/ThreadList.vue';
    import  sourceData from '@/data.json';

    @Component({
        components: { ThreadList }
    })
    export default class Home extends Vue {
        public threads: any = Object.values(sourceData.threads);
        public posts: any = sourceData.posts;
        public users: any = sourceData.users;
    }
</script>

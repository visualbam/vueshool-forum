<template>
    <div class="forum-list">
        <div class="list-title">
            <a href="#">Forums</a>
        </div>
        <ForumListItem v-for="forum in forums" :key="forum['.key']" :forum="forum" />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import ForumListItem from '@/components/ForumListItem.vue';

    @Component({
        name: 'ForumList',
        components: { ForumListItem }
    })
    export default class ForumList extends Vue {
        @Prop({ required: true, type: Array }) public forums;
    };
</script>

<style scoped>

</style>
<template>
    <div class="forum-listing">
        <div class="forum-details">
            <router-link class="text-xlarge" :to="{ name: 'PageForum', params: { id: forum['.key'] }}">{{forum.name}}</router-link>
            <p>{{forum.description}}</p>
        </div>
        <div class="threads-count">
            <p class="count">{{threadsCount}}</p>
            {{threadsCount === 1 ? 'thread' : 'threads'}}
        </div>
        <div class="last-thread">
            <!-- TODO: implement last thread for forum list item component -->
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { countObjectProperties } from '@/utils/index';

    @Component({
        name: 'ForumListItem'
    })
    export default class ForumListItem extends Vue {
        @Prop({ required: true, type: Object }) public forum;

        get threadsCount() {
            return countObjectProperties(this.forum.threads);
        }
    };
</script>

<style scoped>

</style>
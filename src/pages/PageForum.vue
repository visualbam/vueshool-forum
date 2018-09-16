<template>
    <div class="page-forum">
        <div class="forum-header">
            <div class="forum-details">
                <h1>Cooking</h1><p class="text-lead">Discuss your passion for fod and cooking</p>
            </div>
            <a href="#" class="btn-green btn-small">Start a thread</a>
        </div>
        <div class="col-full push-top">
            <ThreadList :threads="threads"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import ThreadList from '@/components/ThreadList.vue';

    @Component({
        name: 'PageForum',
        components: { ThreadList }
    })
    export default class PageForum extends Vue {
        @Prop({ required: true, type: String }) public id: string;

        get forum() {
            return this.$store.state.forums[this.id];
        }

        get threads() {
            const threads: any[] = Object.values(this.$store.state.threads);
            return threads.filter(thread => thread.forumId === this.id);
        }
    };
</script>

<style scoped>
    .page-forum {
        width: 100%;
    }
</style>
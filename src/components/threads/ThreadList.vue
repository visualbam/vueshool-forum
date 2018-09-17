<template>
    <div class="thread-list">
        <h2 class="list-title">Threads</h2>
        <ThreadListItem
                v-for="thread in threads"
                :thread="thread"
                :key="thread['.key']" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ThreadListItem from '@/components/threads/ThreadListItem.vue';

@Component({
    name: 'ThreadList',
    components: { ThreadListItem }
})
export default class ThreadList extends Vue {
    @Prop({ required: true, type: Array }) public threads!: any[];
}
</script>
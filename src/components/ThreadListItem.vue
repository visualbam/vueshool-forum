<template>
    <div class="thread">
        <div class="thread-details">
            <p>
                <router-link :to="{ name: 'PageThreadShow', params: { id: thread['.key'] } }">
                    {{thread.title}}
                </router-link>
            </p>
            <p class="text-faded text-xsmall">
                By <a href="#">{{user.name}}</a>, <AppDate :timestamp="thread.publishedAt" />
            </p>
        </div>
        <div class="activity">
            <p class="replies-count"> {{repliesCount}} replies</p>
            <img src="" alt="" class="avatar-medium">
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { countObjectProperties } from '@/utils';

@Component({
    name: 'ThreadListItem'
})
export default class ThreadListItem extends Vue {
    @Prop({ required: true, type: Object }) public thread!: any;
    get repliesCount() { return countObjectProperties(this.thread.posts) - 1 }
    get user() { return this.$store.state.users[this.thread.userId] }
}
</script>
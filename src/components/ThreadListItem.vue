<template>
    <div class="thread">
        <div class="thread-details">
            <p>
                <router-link :to="{ name: 'PageThreadShow', params: { id: thread['.key'] } }">
                    {{thread.title}}
                </router-link>
            </p>
            <p class="text-faded text-xsmall">
                By <a href="#">{{user.name}}</a>, {{thread.publishedAt}}
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
import sourceData from '@/data.json';

@Component({
    name: 'ThreadListItem'
})
export default class ThreadListItem extends Vue {
    @Prop({ required: true, type: Object }) public thread!: any;
    get repliesCount() { return Object.keys(this.thread.posts).length - 1 }
    get user() { return sourceData.users[this.thread.userId] }
}
</script>
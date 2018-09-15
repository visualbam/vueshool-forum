<template>
    <span class="post-date text-faded" :title="timestamp | formatDate">
        {{timestamp | timeAgo}}
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import moment from 'moment';

@Component({
    name: 'AppDate',
    filters: {
        formatDate(date) {
            return moment.unix(date).format('MMM Do YY, h:mm:ss a');
        },
        timeAgo(date) {
            return moment.unix(date).fromNow();
        }
    }
})
export default class AppDate extends Vue {
    @Prop({ required: true, type: Number, default: 0 }) public timestamp: number;
};
</script>
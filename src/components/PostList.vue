<template>
    <div class="post-list">
        <PostListItem v-for="post in posts"
                      :post="post"
                      :key="post['.key']" />
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import PostListItem from '@/components/PostListItem.vue';
    @Component({
        name: 'PostList',
        components: {
            PostListItem
        }
    })
    export default class ThreadList extends Vue {
        @Prop({ required: true, type: Array }) public posts!: any[];
    }
</script>
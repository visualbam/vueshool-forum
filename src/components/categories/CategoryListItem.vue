<template>
    <div class="category-list-item">
        <router-link
                :to="{ name: 'PageCategory', params: { id: category['.key'] } }"
                class="list-title">
            {{category.name}}
        </router-link>
        <ForumList :forums="categoryForums" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ForumList from '@/components/forums/ForumList.vue';

interface Forum {
    '.key': string,
    categoryId: string,
    description: string,
    lastPostId: string,
    name: string,
    slug: string,
    threads: any;
}

@Component({
    name: 'CategoryListItem',
    components: { ForumList }
})
export default class CategoryListItem extends Vue {
    @Prop({ required: true, type: Object }) public category: any;

    get categoryForums() {
        const forums: any[] = Object.values(this.$store.state.forums);
        return forums.filter(forum => forum.categoryId === this.category['.key']);
    }
};
</script>

<style scoped>

</style>
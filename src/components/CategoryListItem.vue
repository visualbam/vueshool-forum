<template>
    <div class="category-list-item">
        <router-link :to="{ name: 'PageCategory', params: { id: category['.key'] } }" class="list-title">{{category.name}}</router-link>
        <ForumList :forums="categoryForums" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ForumList from '@/components/ForumList.vue';
import  sourceData from '@/data.json';

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
        return Object.values(sourceData.forums)
            .filter(forum => {
                return forum.categoryId === this.category['.key'];
            });
    }
};
</script>

<style scoped>

</style>
<template>
    <div class="page-category">
        <div class="col-full">
            <h1>{{category.name}}</h1>
            <CategoryListItem  :category="category" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CategoryListItem from '@/components/CategoryListItem.vue';
import sourceData from '@/data.json';

@Component({
    name: 'PageCategory',
    components: { CategoryListItem }
})
export default class PageCategory extends Vue {
    @Prop({ required: true, type: String }) public id;

    get category() {
        return sourceData.categories[this.id];
    }
};
</script>

<style scoped>
    .page-category {
        width: 100%;
    }
</style>
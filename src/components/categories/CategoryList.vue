<template>
    <div class="category-list">
        <CategoryListItem v-for="category in categories" :key="category['.key']" :category="category" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CategoryListItem from '@/components/categories/CategoryListItem.vue';

@Component({
    name: 'CategoryList',
    components: { CategoryListItem }
})
export default class CategoryList extends Vue {
    @Prop({ required: true, type: Array }) public categories: any[];
};
</script>

<style scoped>

</style>
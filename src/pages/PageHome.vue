<template>
    <div class="home col-full">
        <h1>Welcome to the forum</h1>
        <CategoryList :categories="categories"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ForumList from '@/components/ForumList.vue';
import  sourceData from '@/data.json';
import CategoryList from '@/components/CategoryList.vue';

@Component({
    components: { CategoryList, ForumList }
})
export default class Home extends Vue {
    public categories: any[] = Object.values(sourceData.categories);
}
</script>

<template>
    <div class="home col-full push-top">
        <h1>Welcome to the forum</h1>
        <CategoryList :categories="categories"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ForumList from '@/components/ForumList.vue';
import CategoryList from '@/components/CategoryList.vue';

@Component({
    components: { CategoryList, ForumList }
})
export default class Home extends Vue {
    get categories() {
        return Object.values(this.$store.state.categories);
    }
}
</script>

<template>
    <div id="app">
        <TheNavBar />
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TheNavBar from '@/components/TheNavBar.vue';

    @Component({
        components: { TheNavBar }
    })
    export default class App extends Vue { }

</script>

<style lang="less">
    @import 'assets/css/style.css';
</style>

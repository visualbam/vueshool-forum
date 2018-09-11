<template>
    <div class="page-not-found col-full">
        <h1>Page not found</h1>
        <p>
            Oops, we couldn't find what you are looking for. Why don't you
            <router-link :to="{ name: 'Home' }">go home instead?</router-link>
        </p>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({ name: 'PageNotFound' })
    export default class PageNotFound extends Vue {

    }
</script>

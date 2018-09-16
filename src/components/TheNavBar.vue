<template>
    <header class="header" id="header">

        <router-link :to="{ name: 'PageHome' }" class="logo">
            <img src="../assets/img/vueschool-logo.svg" alt="">
        </router-link>

        <div class="btn-hamburger">
            <div class="top bar"></div>
            <div class="middle bar"></div>
            <div class="bottom bar"></div>
        </div>

        <nav class="navbar">
            <ul>
                <li class="navbar-user">
                    <a href="#">
                        <img :src="user.avatar" alt="" class="avatar-small">
                        <span>
                            {{user.name}}
                            <img src="../assets/img/arrow-profile.svg" alt="" class="icon-profile">
                        </span>
                        <div id="user-dropdown">
                            <div class="triangle-drop"></div>
                            <ul class="dropdown-menu">
                                <li class="dropdown-menu-item">
                                    <a href="">View Profile</a>
                                </li>
                                <li class="dropdown-menu-item">Log out</li>
                            </ul>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>


    </header>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { mapGetters } from 'vuex';

    @Component({
        name: 'TheNavBar',
        computed: {
            ...mapGetters({
                'user': 'authUser'
            })
        }
    })
    export default class TheNavBar extends Vue { };
</script>

<style scoped>

</style>
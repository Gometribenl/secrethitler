<template>
    <div>
        <b-navbar toggleable="lg" type="dark">
            <div style="text-align: center"><img src="/img/secrethitler-logo.png" height="75" alt="logo"></div>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                
            <b-navbar-nav class="ml-auto">
                <b-nav card-header pills>
                    <router-link :to="{ name: 'welcome' }"><NavButton name='Home'></NavButton></router-link>
                    <router-link :to="{ name: 'infopage' }"><NavButton name='Info'></NavButton></router-link>
                    <router-link :to="{ name: 'modepicker' }"><NavButton name='Play'></NavButton></router-link>
                    <router-link :to="{ name: 'createjoin' }"><NavButton name='Create'></NavButton></router-link>
                </b-nav>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import NavButton from './NavButton'
export default {
    components: {NavButton}
}
</script>

<style scoped>
</style>
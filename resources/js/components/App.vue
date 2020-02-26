<template>
    <div>
        <router-link :to="{ name: 'welcome' }" class="nav-link">Home</router-link>
        <router-link :to="{ name: 'infopage' }" class="nav-link" >Spa-Page</router-link>
        <router-link :to="{ name: 'gameroom' }" class="nav-link" >GameRoom</router-link>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    export default {}
</script>

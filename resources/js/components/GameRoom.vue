<template>
    <div>
        <div class="button" align="right">
            <router-link :to="{ name: 'welcome' }"><button style="background-color: black;   border-radius: 12px; height: 50px; width: 120px;
 font-family: Fraktur BT, serif;
    font-size: 200%;
    color: white;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: black;
    border-bottom-color: black">Home
            </button></router-link>
            <router-link :to="{ name: 'info' }"><button style="background-color: black;   border-radius: 12px;
    height: 50px;
    width: 120px;
    font-family: Fraktur BT, serif;
    font-size: 200%;
    color: white;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: black;
    border-bottom-color: black">Info
            </button></router-link>
        </div>
        <div class="img">
            <br>
            <img src="/img/liberal-board-min (2).jpg" height="40%" width="40%">
            <br>
            <img src="/img/facist-board-min (2).jpg" height="40%" width="40%">
            <br>
            <img src="/img/liberal-membership-card-min (2).jpg" height="7%" width="7%">
            <img src="/img/liberal-membership-card-min (2).jpg" height="7%" width="7%">
            <img src="/img/liberal-membership-card-min (2).jpg" height="7%" width="7%">
            <img src="/img/liberal-membership-card-min (2).jpg" height="7%" width="7%">
            <img src="/img/liberal-membership-card-min (2).jpg" height="7%" width="7%">
            <img src="/img/liberal-membership-card-min (2).jpg" height="7%" width="7%">
            <img src="/img/liberal-membership-card-min (2).jpg" height="7%" width="7%">
            <img src="/img/liberal-membership-card-min (2).jpg" height="7%" width="7%">
            <img src="/img/liberal-membership-card-min (2).jpg" height="7%" width="7%">
            <img src="/img/liberal-membership-card-min (2).jpg" height="7%" width="7%">
        </div>

    </div>


</template>

<script>
    export default {
        props: ['title']
    }
</script>

<style scoped>
</style>


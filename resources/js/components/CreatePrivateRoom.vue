<template>
    <div>
        <div class='mainWrapper'>
            <div class="logoWrapper">
                <Logo/>
            </div>
        </div>
        <div class="keyContainer">
            <h2>Game Key: {{ $route.params.room }}</h2>

        </div>
        <div class="keyContainer">
        <h2>in queue: {{ connectCounter }} / max 10</h2>
        </div>
        <div class="btnContainer" ><router-link :to="{ name: 'gameroom', params: room}"><CustomButton name="Start"></CustomButton></router-link></div>
    </div>
</template>

<script>
    import Logo from './Logo'

    import CustomButton from "./CustomButton"
    export default {
        components : { Logo, CustomButton },
        data() {
            return {
                room: "",
                connectCounter: 0,
            };
        },

    };
</script>
<style scoped>
    .keyContainer{
        width: 100%;
        display: flex;
        justify-content: center;
    }

</style>

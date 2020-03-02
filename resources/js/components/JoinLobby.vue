<template>
    <div>
        <div class="header"></div>
        <logo></logo>
        <div>
            <div class="logoWrapper">

            </div>
            <div class="" style="text-align: center;">
                <input type="text;" style="border-radius: 5px" placeholder="Game key">
            </div>
            <div class="btnWrapper">
                <div class="btnContainer"><router-link :to="{ name: 'Queue' }"><BlackButton name="join"></BlackButton></router-link></div>
                <div class="btnContainer"><router-link :to="{ name: 'Cancel' }"><BlackButton name="cancel"></BlackButton></router-link></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from "./Logo"
    import BlackButton from "./BlackButton"

    export default {
        components : {Logo, BlackButton}
    }
</script>

<style scoped>
    div{
        font-family: Fraktur BT, serif;
    }
    .btnContainer{
        display: inline-block;
        text-align: center;
        margin-right: 10%;
        margin-left: 10%;
        margin-bottom: 40px;
    }
    .btnWrapper{
        width: 100%;
        text-align: center;
    }
    .header{
        height: 50px;
    }
</style>

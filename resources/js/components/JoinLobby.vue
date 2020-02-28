<template>
    <div>
        <div class="header"></div>
        <logo></logo>
        <div>
            <div class="logoWrapper">

            </div>
            <div class="btnWrapper">
                <div class="btnContainer"><router-link :to="{ name: 'Queue' }"><CustomButton name="join"></CustomButton></router-link></div>
                <div class="btnContainer"><router-link :to="{ name: 'Cancel' }"><CustomButton name="cancel"></CustomButton></router-link></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from "./Logo"
    import CustomButton from "./CustomButton"

    export default {
        components : {Logo, CustomButton}
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

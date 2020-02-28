<template>
    <div>
        <div class="header"></div>
        <logo height=""></logo>
        <div>
            <div class="logoWrapper">

            </div>
            <div class="btnWrapper">
                <div class="btnContainer"><router-link :to="{ name: 'modepicker' }"><CustomButton name="play"></CustomButton></router-link></div>
                <div class="btnContainer"><router-link :to="{ name: 'info' }"><CustomButton name="info"></CustomButton></router-link></div>
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

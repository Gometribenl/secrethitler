<template>
    <div>
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
        props : ['title'],
        components : {Logo, CustomButton}
    }
</script>

<style scoped>
    div{
        font-family: Fraktur BT, serif;
    }
    .btnContainer{
        display: inline-block;
        margin: 10px;
        top: 50%;
    }
    .btnWrapper{
        width: 100%;
        text-align: center;
    }
</style>

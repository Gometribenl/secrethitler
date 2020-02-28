<template>
    <div>
        <div class="backbtnWrapper">
            <router-link :to="{ name: 'welcome' }"><BackButton/></router-link>
        </div>
        <div class='mainWrapper'>
            <div class="logoWrapper">
                <Logo/>
            </div>
        </div>
        <div class="btnWrapper">
            <div class="btnContainer"><router-link :to="{ name: 'welcome' }"><CustomButton name="public"></CustomButton></router-link></div>
            <div class="btnContainer"><router-link :to="{ name: 'welcome' }"><CustomButton name="private"></CustomButton></router-link></div>
        </div>
    </div>
</template>

<script>
import BackButton from './BackButton'
import Logo from './Logo'
import Fraktur from 'fraktur.css'
import CustomButton from "./CustomButton"
    export default {
        components : { CustomButton, Logo, BackButton }
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
.logoWrapper{
    text-align: center;
}
.mainWrapper{
    text-align: center;
}
.backbtnWrapper{
    height: 50px;
    margin: 0;
}
</style>

<template>
    <div>
        <div class="logoWrapper">

        </div>
        <div class="btnWrapper">
            <div class="btnContainer"><router-link :to="{ name: 'welcome' }"><CustomButton name="public"></CustomButton></router-link></div>
            <div class="btnContainer"><router-link :to="{ name: 'welcome' }"><CustomButton name="private"></CustomButton></router-link></div>
        </div>
    </div>
</template>

<script>
import Fraktur from 'fraktur.css'
import CustomButton from "./CustomButton"
    export default {
        components : { CustomButton }
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
.logoWrapper{
    
}
</style>
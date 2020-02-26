<template>   
    <div class="Centerpage">
        <div class="btnContainer"><CustomButton name="public"></CustomButton></div>
        <div class="btnContainer"><CustomButton name="private"><router-link :to="{ name: 'welcome' }">Home</router-link></CustomButton></div>
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
}
.Centerpage{
    width: 100%;
    text-align: center;
}
</style>
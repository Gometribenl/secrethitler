<template>   
    <div>
        <h1> {{title}}</h1>
        <CustomButton name="public"></CustomButton>
        <CustomButton name="private"></CustomButton>
    </div>
</template>

<script>
import Fraktur from 'fraktur.css'
import CustomButton from "./CustomButton"
    export default {
        props : ['title'],
        components : { CustomButton}
    }
</script>

<style scoped>
div{
    font-family: Fraktur BT, serif;
}

</style>
<template>   
    <div>
        <h1> {{title}}</h1>
        <CustomButton name="public"></CustomButton>
        <CustomButton name="private"></CustomButton>
    </div>
</template>

<script>
import CustomButton from "./CustomButton"
    export default {
        props : ['title'],
        components : { CustomButton}
    }
</script>

<style scoped>

</style>
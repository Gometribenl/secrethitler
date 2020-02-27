<template>
    <div>
        <button>{{name}}</button>
    </div>
</template>

<script>
import Fraktur from 'fraktur.css'
export default {
    props: {
        name : String,
    }
}
</script>

<style scoped>
button {
    background-color: transparent;
    border-radius: 12px;
    height: 50px;
    width: 120px;
    font-family: Fraktur BT, serif;
    font-size: 200%;
    color: white;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: black;
    border-bottom-color: black
}
</style>
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
    border-radius: 6px;
    height: 50px;
    width: 120px;
    font-family: Fraktur BT, serif;
    font-size: 200%;
    color: white;
    border: 0.5px solid;
    border-color: black;
    box-shadow: 2px 2px black;
}
</style>
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
    height: 40px;
    width: 120px;
    font-family: Fraktur BT, serif;
    font-size: 150%;
    color: whitesmoke;
}
</style>
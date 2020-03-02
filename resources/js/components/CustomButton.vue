<template>
    <div>
        <button>{{name}}</button>
    </div>
</template>

<script>
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
    font-size: 200%;
    border: 0.5px solid;
    border-color: black;
    box-shadow: 2px 2px black;
}
</style>

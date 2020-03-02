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
        height: 50px;
        width: 120px;
        font-size: 200%;
        background: #242322;
        border-width: 0;
        border-radius: 8px;
        margin-left: 15px;
        margin-right: 15px;
    }
    button:hover{
        background: #555454;
    }
</style>

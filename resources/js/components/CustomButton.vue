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
    border-radius: 12px;
    height: 70px;
}
</style>
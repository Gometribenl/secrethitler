<template>
    <div>
        <logo></logo>
    </div>
</template>

<script>
    import Logo from "./Logo"

    export default {
        props : ['title'],
        components : {Logo}
    }
</script>

<style scoped>

</style>

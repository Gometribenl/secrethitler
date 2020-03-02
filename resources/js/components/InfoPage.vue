<template>   
    <div>
        <div class="header">
            <Header/>
        </div>
        <div class='titelContainer'>
            <h1>Spel regels</h1>
        </div>
        <div class='tekstContainer'>
            <SpelregelsTxt/>
        </div>
    </div>
</template>

<script>
import SpelregelsTxt from './SpelregelsTxt'
import Header from './Header'
    export default {
        components: { Header, SpelregelsTxt }
    }
</script>

<style scoped>
.textContainer{
    width: 100px;
}
.titelContainer{
    text-align: center;
}
</style>

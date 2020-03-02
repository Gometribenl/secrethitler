<template>
    <div>
        <main>
            <router-view></router-view>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from './Footer'
    export default {
        components: { Footer }
    }
</script>

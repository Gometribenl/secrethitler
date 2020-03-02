<template>
    <div class="row justify-content-center">
        <div class="col-12">
            <logo class="logo" />
        </div>
            <div>
            <div class="col-12">
                <div class="btnContainer"><router-link :to="{ name: 'welcome' }"><BlackButton name="Cancel"></BlackButton></router-link></div>
            </div>
            </div>
    </div>
</template>
<style>

</style>

<script>
    import Logo from './Logo'
    import CustomButton from "./CustomButton"
    import BlackButton from './BlackButton'
    export default {
        components : { CustomButton, Logo, BlackButton }
    }
</script>

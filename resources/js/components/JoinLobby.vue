<template>
    <div>
        <div class="header"></div>
        <div style="text-align: center; display: block; margin-left: auto; margin-right: auto; width: 50%">
            <logo></logo>
        </div>
        <div>
            <div class="logoWrapper">

            </div>

            <div class="" style="text-align: center; padding-top: 10%">
                <input type="text" placeholder="Game key" style="height: 44px; width: 11vw">
            </div>
            <br>
            <div class="btnWrapper">
                <div class="btnContainer">
                    <router-link :to="{ name: 'Queue' }">
                        <BlackButton name="join"></BlackButton>
                    </router-link>
                </div>
                <div class="btnContainer">
                    <router-link :to="{ name: 'Cancel' }">
                        <BlackButton name="cancel"></BlackButton>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from "./Logo"
    import BlackButton from "./BlackButton"

    export default {
        components: {Logo, BlackButton}
    }

</script>

<style scoped>
    div {
        font-family: Fraktur BT, serif;
    }

    .btnContainer {
        display: inline-block;
        text-align: center;
        margin-right: 10%;
        margin-left: 10%;
        margin-bottom: 40px;
    }

    .btnWrapper {
        width: 100%;
        text-align: center;
    }

    .header {
        height: 50px;
    }

    input[type=text] {
        background-color: #FBA38D;
        color: #F4C7A8;
        border-radius: 5px;
        border-color: #F4C7A8;
        border-style: solid;
        text-align: center;
    }

    ::placeholder {
        color: #F4C7A8;
        text-align: center;
        font-size: 22px;
    }
</style>

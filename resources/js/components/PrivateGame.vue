<template>
    <div>
        <div class="backbtnWrapper">
            <router-link :to="{ name: 'modepicker' }"><BackButton/></router-link>
        </div>
        <div class='mainWrapper'>
            <div class="logoWrapper">
                <Logo/>
            </div>
        </div>
        <div class="btnWrapper">
            <div class="btnContainer" v-if="room"><router-link :to="{ name: 'createPrivateRoom', params: {room: room}}"><CustomButton name="Create"></CustomButton></router-link></div>
            <div class="btnContainer"><router-link :to="{ name: 'joinPrivateRoom' }"><CustomButton name="Join"></CustomButton></router-link></div>
        </div>
    </div>
</template>

<script>
import BackButton from './BackButton'
import Logo from './Logo'
import CustomButton from "./CustomButton"
import {chatsocket} from '../socket'
    export default {
        components : { CustomButton, Logo, BackButton },
        data() {
            return {
                room: "",
                connectCounter: 0,
            };
        },
        created: function() {
            this.generateKey();
            chatsocket.emit('create-room', this.room) ;
            chatsocket.on('player-count', (aantal) => {
                this.connectCounter = aantal;
            });
        },
        methods: {
            generateKey() {
                let key =  Math.random().toString(26).substring(2, 5) + Math.random().toString(26).substring(2, 5);
                this.room = key;
            },

        },

    }
</script>

<style scoped>
.btnContainer{
    display: inline-block;
    text-align: center;
    margin-right: 10%;
    margin-left: 10%;
    margin-bottom: 40px;
}
.btnWrapper{
    width: 100%;
    text-align: center;
}
.logoWrapper{
    text-align: center;
}
.mainWrapper{
    text-align: center;
}
.backbtnWrapper{
    height: 50px;
    margin: 0;
}
</style>

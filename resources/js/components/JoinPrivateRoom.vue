<template>
    <div>
        <div class='mainWrapper'>
            <div class="logoWrapper">
                <Logo/>
            </div>
        </div>

        <div class="form-control">
            <input type="text" placeholder="Game Key" v-model="room">
        </div>

        <div v-if="room"></div><router-link :to="{ name: 'createPrivateRoom', params: {room: room} }"><BlackButton v-on:click="joinGame" name="Join"></BlackButton></router-link>
        <router-link :to="{ name: 'modepicker' }"><BlackButton v-on:click="joinGame" name="Cancel"></BlackButton></router-link>
    </div>
</template>

<script>
import Logo from './Logo'
import BlackButton from './BlackButton'
import {chatsocket} from '../socket'

export default {
    components: { Logo, BlackButton },
    data() {
        return {
            room: null,

        }
    },

    methods: {
        joinGame() {
            chatsocket.emit('join-room', this.room);
            console.log(this.room)
        }
    },
};



</script>

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueRouter)
Vue.use(VueChatScroll)
Vue.use(BootstrapVue)

import App from './components/App'
import Welcome from './components/Welcome'
import InfoPage from './components/InfoPage'
import GameRoom from "./components/GameRoom";
import ModePicker from './components/ModePicker'
import JoinLobby from './components/JoinLobby'
import Queue from './components/Queue'
import BootstrapVue from 'bootstrap-vue'
import CreateJoin from './components/CreateJoin';
import Chat from './components/Chat';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: Welcome,
        },
        {
            path: '/info',
            name: 'info',
            component: InfoPage,
        },
        {
            path: '/room',
            name: 'gameroom',
            component: GameRoom,
        },
        {
            path: '/modepicker',
            name: 'modepicker',
            component: ModePicker,
            props: {
                title: "Game mode picker"
            }
        },
        {
            path: '/join',
            name: 'joinlobby',
            component: JoinLobby,
            props: {
                title: "Join a lobby"
            }

        },
        {
            path: '/queue',
            name: 'Public queue',
            component: Queue,
        },
        {
            path: 'createjoin',
            name: 'createjoin',
            component: CreateJoin
        },
        {
            path: '/chat',
            name: 'chat',
            component: Chat
        }
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
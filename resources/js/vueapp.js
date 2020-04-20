require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueRouter);
Vue.use(VueChatScroll);
Vue.use(BootstrapVue);

import App from './components/App'
import Welcome from './components/Welcome'
import InfoPage from './components/InfoPage'
import GameRoom from "./components/GameRoom";
import ModePicker from './components/ModePicker'
import JoinLobby from './components/JoinLobby'
import Queue from './components/Queue'
import BootstrapVue from 'bootstrap-vue'
import PrivateGame from './components/PrivateGame';
import Chat from './components/Chat';
import CreatePrivateRoom from './components/CreatePrivateRoom';
import JoinPrivateRoom from  './components/JoinPrivateRoom';


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
            path: '/room/:room',
            name: 'gameroom',
            component: GameRoom,
        },
        {
            path: '/modepicker',
            name: 'modepicker',
            component: ModePicker,
        },
        {
            path: '/join',
            name: 'joinlobby',
            component: JoinLobby,
        },
        {
            path: '/queue',
            name: 'Public queue',
            component: Queue,
        },
        {
            path: '/privategame',
            name: 'privateGame',
            component: PrivateGame
        },
        {
            path: '/chat',
            name: 'chat',
            component: Chat
        },
        {
            path: '/createprivateroom/:room',
            name: 'createPrivateRoom',
            component: CreatePrivateRoom
        },
        {
            path: '/joinprivateroom',
            name: 'joinPrivateRoom',
            component: JoinPrivateRoom
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});

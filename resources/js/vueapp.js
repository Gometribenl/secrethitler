require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/App'
import Welcome from './components/Welcome'
import InfoPage from './components/InfoPage'
import GameRoom from "./components/GameRoom";
import ModePicker from './components/ModePicker'


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
        }
    ],
});
const app = new Vue({
    el: '#app',
    components: { App },
    router,
});

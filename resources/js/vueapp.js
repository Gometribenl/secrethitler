require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import App from './components/App'
import Welcome from './components/Welcome'
import InfoPage from './components/InfoPage'
import GameRoom from "./components/GameRoom";
import ModePicker from './components/ModePicker'
import Queue from './components/Queue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'welcome',
            component: Welcome,
            props: { title: "welcome" }
        },
        {
            path: '/info',
            name: 'info',
            component: InfoPage,
            props: {
                title: "Info",
            }
        },
        {
            path: '/room',
            name: 'gameroom',
            component: GameRoom,
            props: {
                title: "game room",
            }
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
            path: '/queue',
            name: 'Public queue',
            component: Queue,
        }
    ],
});
const app = new Vue({
    el: '#app',
    components: { App },
    router,
});

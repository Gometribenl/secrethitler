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
import Queue from './components/Queue'
import BootstrapVue from 'bootstrap-vue'
import CreateJoin from './components/CreateJoin';

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
        }
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});

Vue.component('message-component', require('./components/MessageComponent.vue').default);

const chat = new Vue({
    el: '#chat',
    data: {
        message: '',
        chat: {
            message: [],
            user: [],
        },
        numberOfUsers: 0
    },
    methods: {
        send() {
            if (this.message.length !== 0)
                this.chat.message.push(this.message);
            this.chat.user.push('You');
            axios.post('/send', {
                message: this.message
            })
                .then(response => {
                    this.message = '';
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    mounted() {
        Echo.private('chat')
            .listen('ChatEvent', (e) => {
                this.chat.message.push(e.message);
                this.chat.user.push(e.user);
            })
        Echo.join(`chat`)
            .here((users) => {
                this.numberOfUsers = users.length;
            })
            .joining(() => {
                this.numberOfUsers += 1;
            })
            .leaving(() => {
                this.numberOfUsers -= 1;
            });
    }
});
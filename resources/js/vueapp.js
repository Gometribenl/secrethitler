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
<<<<<<< HEAD
import CreateJoin from './components/CreateJoin';

import CreatePrivateGame from "./components/CreatePrivateGame";

=======
import PrivateGame from './components/PrivateGame';
>>>>>>> 10a6311d14c5b0c76b6de9ae713c8bb84c860edb
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
<<<<<<< HEAD
            path: 'createjoin',
            name: 'createjoin',

            component: CreateJoin,
        },
        {
            path: '/createprivategame',
            name: 'createprivategame',
            component: CreatePrivateGame,

            component: CreateJoin
=======
            path: '/privategame',
            name: 'privateGame',
            component: PrivateGame
>>>>>>> 10a6311d14c5b0c76b6de9ae713c8bb84c860edb
        },
        {
            path: '/chat',
            name: 'chat',
            component: Chat
<<<<<<< HEAD

        }
=======
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
>>>>>>> 10a6311d14c5b0c76b6de9ae713c8bb84c860edb
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
<<<<<<< HEAD

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


=======
});
>>>>>>> 10a6311d14c5b0c76b6de9ae713c8bb84c860edb

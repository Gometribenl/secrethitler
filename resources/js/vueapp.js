require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueRouter)
Vue.use(VueChatScroll)


import App from './components/App';
import Welcome from './components/Welcome';
import InfoPage from './components/InfoPage';
import ModePicker from './components/ModePicker';

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
            path: '/modepicker',
            name: 'modepicker',
            component: ModePicker,
            props: {
                title: "Game mode picker"
            }
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

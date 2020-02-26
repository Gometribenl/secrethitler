import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/App'
import Welcome from './components/Welcome'
import InfoPage from './components/InfoPage'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'welcome',
            component: Welcome,
            props: { title: "This is the SPA home" }
        },
        {
            path: '/spa-page',
            name: 'infopage',
            component: InfoPage,
            props: { 
                title: "This is the SPA Second Page",
            }
        },    
    ],
})
const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
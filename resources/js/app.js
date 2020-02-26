require('./bootstrap');

import welcome from './components/welcome.vue';

window.Vue = require('vue');

    Vue.component('welcome', welcome);

    const app = new Vue({
        el: '#app'
});




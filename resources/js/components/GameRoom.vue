
<template>
    <div class="container">
        <div class="row" id="app">
            <div class="offset-4 col-4">
                <li class="list-group-item active">Chat Room <span class="badge badge-pill badge-success">@{{ numberOfUsers }}</span></li>
                <div class="badge border-pill badge-primary">@{{ typing }}</div>
                <ul class="list-group" v-chat-scroll>
                    <message-component
                        v-for="value in chat.data.chat.message"
                        :key=value.index
                        :color= chat.color[index]
                        :user = chat.user[index]
                    >
                        @{{ value }}
                    </message-component>
                </ul>
                <input type="text" class="form-control" placeholder="Type your text here..." v-model="message"
                       @keyup.enter="send">
            </div>
        </div>
    </div>
</template>

<script>
    const chat = new Vue({
        el: '#app',
        data: {
            message: '',
            chat: {
                message: [],
                user: [],
                color: []
            },
            typing: '',
            numberOfUsers: 0
        },
        watch: {
            message() {
                Echo.private('chat')
                    .whisper('typing', {
                        name: this.message
                    });
            }
        },
        methods: {
            send() {
                if (this.message.length !== 0)
                    this.chat.message.push(this.message);
                this.chat.user.push('You');
                this.chat.color.push('success');
                axios.post('/send', {
                    message: this.message
                })
                    .then(response => {
                        console.log(response);
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
                    this.chat.color.push('warning');
                })
                .listenForWhisper('typing', (e) => {
                    if (e.name !== '') {
                        this.typing = 'typing...'
                    } else {
                        this.typing = ''
                    }
                });
            Echo.join(`chat`)
                .here((users) => {
                    this.data.numberOfUsers = users.length;
                })
                .joining((user) => {
                    this.data.numberOfUsers +=1;
                })
                .leaving((user) => {
                    this.data.numberOfUsers -=1;
                });
        }
    });
    export default {
        chat
    }
</script>

<style scoped>
    .list-group {
        overflow-y: scroll;
        height: 200px;
    }
</style>

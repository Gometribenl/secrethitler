<template>
  <div id="chat">
    <ul id="messages">
      <li v-for="message in messages">{{message}}</li>
    </ul>
  
    <form v-on:submit="send">
      <input v-model="message" />
      <button>Send</button>
    </form>
  </div>
</template>

<script>
window.io = require("socket.io-client");
let socket = io("http://localhost:3000");

export default {
  data() {
    return {
      messages: [],
      message: "",
    };
  },

  created: function() {
    socket.on(
      "chat message",
      function(message) {
        console.log(1);
        this.messages.push(message);
        console.log(this.messages);
      }.bind(this));
  },
  
  methods: {
    send: function(e) {
      socket.emit("chat message", this.message);
      e.preventDefault();
      this.message = "";
    }
  },
  
  
};
</script>

<style scoped>
.list-group {
  overflow-y: hidden;
  height: 50vh;
  border-radius: 16px 16px 0 0;
  border-top: solid #be6664 3px;
  border-left: solid #be6664 3px;
  border-right: solid #be6664 3px;
}

.chat {
  padding-top: 1%;
  padding-bottom: 1%;
}

.game-board-img {
  width: 75%;
  height: 100%;
  padding-top: 1%;
  padding-bottom: 1%;
}

.lib-card {
  max-width: 100%;
  height: auto;
}
.cards {
  padding-top: 2%;
}

.chat-text {
  margin-left: 10px;
  font-family: "Odibee Sans", serif;
  font-size: 20px;
}

.chat-text:first-child {
  margin-top: 10px;
}

.chat-color {
  background-color: rgba(255, 255, 255, 0.6);
  color: #363636;
}

.form-control {
  border-radius: 0 0 16px 16px;
  border-bottom: solid #be6664 3px;
  border-left: solid #be6664 3px;
  border-right: solid #be6664 3px;
}
</style>

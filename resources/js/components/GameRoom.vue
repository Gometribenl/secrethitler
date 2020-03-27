<template>
  <div class="col-12">
    <div class="row col-12">
      <div class="col-8">
        <div class="col-12">
          <img class="game-board-img" src="/img/liberal-board-min (2).jpg" />
        </div>
        <div class="col-12">
          <img class="game-board-img" src="/img/facist-board-min (2).jpg" />
        </div>
      </div>
      <div class="col-4">
        <Chat />
      </div>
    </div>
    <div class="cards row">
      <div class="offset-1 col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png" />
      </div>
      <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png" />
      </div>
      <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png" />
      </div>
      <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png" />
      </div>
      <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png" />
      </div>
      <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png" />
      </div>
      <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png" />
      </div>
      <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png" />
      </div>
      <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png" />
      </div>
      <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png" />
      </div>
    </div>
  </div>
</template>

<script>
window.io = require("socket.io-client");
let socket = io("http://localhost:3000");

import Chat from "./Chat";

export default {
  components: { Chat }
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

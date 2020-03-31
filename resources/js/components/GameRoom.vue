<template>
  <div>
    <Header />
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
      <div class="voting">
        <button v-on:click="startVoting">startVoting</button>
        <!-- degene waar op gestemd gaat worden moet hieronder worden meegegeven -->
        <Voter v-if="showVoter" v-on:messageFromChild="votingResult" username="Richard" />
        <button v-on:click="stopVoting">stopVoting</button>
      </div>
      <PlayerCards />
    </div>
  </div>
</template>

<script>
window.io = require("socket.io-client");
let socket = io("http://localhost:3000");

import Chat from "./Chat";
import Header from "./Header";
import Voter from "./Voter";
import PlayerCards from "./PlayerCards";

export default {
  components: { Chat, Header, Voter, PlayerCards },
  data() {
    return {
      showVoter: false
    };
  },
  created() {
    socket.on(
      "start voting",
      function() {
        this.showVoter = false;
      }.bind(this)
    );
    socket.on(
      "start voting",
      function() {
        this.showVoter = true;
      }.bind(this)
    );
  },
  methods: {
    startVoting() {
      socket.emit("start voting");
    },
    stopVoting() {
      socket.emit("stop voting");
    },
    votingResult(result) {
      this.result = result;
    }
  }
};
</script>

<style scoped>
.voting {
  text-align: center;
}
.list-group {
  overflow-y: hidden;
  height: 50vh;
  border-radius: 16px 16px 0 0;
  border-top: solid #be6664 3px;
  border-left: solid #be6664 3px;
  border-right: solid #be6664 3px;
}

.game-board-img {
  width: 75%;
  height: 100%;
  padding-top: 1%;
  padding-bottom: 1%;
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

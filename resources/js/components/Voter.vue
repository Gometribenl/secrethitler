<template>
  <div>
    <Countdown v-on:timerFinished="countdownMessageReceived"/>
    <h3>Should {{username}} become chancellor?</h3>
    <button v-if="showButtons" v-on:click="voteYes">Ja!</button>
    <button v-if="showButtons" v-on:click="voteNo">Nein!</button>
    <h3 v-if="timerFinished">{{votingResult}}</h3>
  </div>
</template>

<script>
window.io = require("socket.io-client");
import {chatsocket} from '../socket'

import Countdown from "./Countdown";

export default {
  components: { Countdown },
  props: {
    username: ""
  },
  computed: {
    votingResult: function() {
        if (this.result == "calculating") {
          return "Time to vote";
        } else if (this.result == "false") {
          return this.username + " isn't going to be chancellor";
        } else {
          return this.username + " is the next chancellor";
        }
    }
  },
  data() {
    return {
      result: "calculating",
      timerFinished: false,
      votes: [],
      showButtons: true
    };
  },
  created() {
    chatsocket.on(
      "vote yes",
      function() {
        this.votes.push("yes");
      }.bind(this)
    );
    chatsocket.on(
      "vote no",
      function() {
        this.votes.push("no");
      }.bind(this)
    );
    chatsocket.on(
      "stop voting",
      function() {
        this.showVoter = false;
      }.bind(this.$parent)
    );
  },
  methods: {
    stopVoting() {
      chatsocket.emit("stop voting");
    },
    voteYes() {
      chatsocket.emit("vote yes");
      this.showButtons = false;
    },
    voteNo() {
      chatsocket.emit("vote no");
      this.showButtons = false;
    },
    calcVotes() {
      let votesCount = this.votes.length;
      let minimalYes = votesCount / 2;
      let actualYes = 0;

      for (var i = 0; i < votesCount; i++) {
        if (this.votes[i] == "yes") {
          actualYes = +1;
        }
      }
      if (minimalYes <= actualYes) {
        this.result = "true";
      } else {
        this.result = "false";
      }
    },
    countdownMessageReceived(timerFinished){
      this.timerFinished = timerFinished;
      this.calcVotes();
      this.votes = [];
    }
  }
};
</script>

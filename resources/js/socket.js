window.io = require("socket.io-client");
export const chatsocket = io("http://localhost:3000/gameroom?token="+window.Laravel.apiToken);

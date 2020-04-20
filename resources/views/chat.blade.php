<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Document</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <style>
        @import url('https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap');

        .list-group {
            overflow-y: hidden;
            height: 50vh;
            border-radius: 16px 16px 0 0 ;
            border-top: solid #BE6664 3px;
            border-left: solid #BE6664 3px;
            border-right: solid #BE6664 3px;
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
            font-family: 'Odibee Sans', serif;
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
            border-bottom: solid #BE6664 3px;
            border-left: solid #BE6664 3px;
            border-right: solid #BE6664 3px;
        }
    </style>
</head>
<header>

</header>
<body>
<div class="col-12">
<div class="row col-12" id="chat">
    <div class="col-8">
        <div class="col-12">
            <img class="game-board-img" src="/img/liberal-board-min (2).jpg">
        </div>
        <div class="col-12">
            <img class="game-board-img" src="/img/facist-board-min (2).jpg">
        </div>
    </div>
    <div class="chat col-4">
        <ul class="list-group chat-color" v-chat-scroll>
            <message-component
                v-for="value,index in chat.message"
            :key=value.index
                :user=chat.user[index]
                class="chat-text"
            >
                @{{ value }}
            </message-component>
        </ul>
        <input type="text" class="form-control" placeholder="Type your text here..."
               v-model="message"
               @keyup.enter="send">
    </div>
</div>
<div class="cards row">
    <div class="offset-1 col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png">
    </div>
    <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png">
    </div>
    <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png">
    </div>
    <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png">
    </div>
    <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png">
    </div>
    <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png">
    </div>
    <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png">
    </div>
    <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png">
    </div>
    <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png">
    </div>
    <div class="col-1">
        <img class="lib-card" src="/img/liberal-membership-card.png">
    </div>
</div>
<script src="../js/vueapp.js"></script>
</div>
</body>
<footer>

</footer>
</html>

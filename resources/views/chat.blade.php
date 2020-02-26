<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Document</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <style>
        .list-group {
            overflow-y: scroll;
            height: 200px;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="row" id="app">
        <div class="offset-4 col-4">
            <li class="list-group-item active">Chat Room <span class="badge badge-pill badge-success">@{{ numberOfUsers }}</span></li>
            <div class="badge border-pill badge-primary">@{{ typing }}</div>
            <ul class="list-group" v-chat-scroll>
                <message-component
                    v-for="value,index in chat.message"
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
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>

<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Secret Hitler</title>

    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="/css/app.css">
</head>
<body>
<div id="app">
    <App></App>
</div>
@if (Route::has('login'))
    <div class="top-right links">
        @auth
        @else
            <a href="{{ route('login') }}">Login</a>

            @if (Route::has('register'))
                <a href="{{ route('register') }}">Register</a>
            @endif
        @endauth
    </div>
@endif
<script>
    window.Laravel = {!! json_encode([
       'csrfToken' => csrf_token(),
       'apiToken' => $token_name ?? null,
   ]) !!};
</script>
<script type="text/javascript" src="/js/vueapp.js"></script>

</body>
</html>

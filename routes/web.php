<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('gameroom','ChatController@chat');
Route::post('send','ChatController@send');

Auth::routes();


Route::get('api_token', function(Illuminate\Http\Request $request) {
    echo $request->arjan;
    return \App\User::find(1);
});

Route::middleware('auth:sanctum')->get('/user', function (Illuminate\Http\Request $request) {
    return $request->user();
});

Route::get('/{any}', function(){ $token = Auth::User()->createToken('token_name');
    return view('vueapp', ['currentUser'=>Auth::User(), 'token_name'=>$token->plainTextToken]);
})->where('any', '.*')->middleware('auth');


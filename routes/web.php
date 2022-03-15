<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;

Route::pattern('url', '.*');

Route::get('/{url?}', Controller::class);

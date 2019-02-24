<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Cache;


class CacheController extends Controller{

    public function cacheRedis(){
        return Redis::get('name');
    }

    public function cacheStore(){
        Cache::put('test',11111,10);
        $res = Cache::get('test');
        return $res;
    }
}
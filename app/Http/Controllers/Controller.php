<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __invoke(
        Request $request
    )
    {
        app()->setLocale($request->getPreferredLanguage(['en', 'fr', 'nl']));

        $key = 'ssr_' . md5($request->fullUrl());
        $ssr = cache()->get($key, function () use ($key) {
            $ssr = ssr('js/app-server.js')
                ->context('title', config('app.name'))
                ->context('scripts', [
                    (string)mix('/js/manifest.js'),
                    (string)mix('/js/vendor.js'),
                    (string)mix('/js/app-client.js')
                ])
                ->context('lang', str_replace('_', '-', app()->getLocale()))
                ->fallback(view('ssr'))
                ->render();

            cache()->set($key, $ssr, now()->addMinutes(1));

            return $ssr;
        });

        return response($ssr);
    }
}

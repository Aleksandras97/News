<?php

namespace App\Http\Controllers;

use App\Http\Resources\FeedProviderResource;
use App\Models\FeedProvider;
use Illuminate\Http\Request;

class FeedProviderController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FeedProvider  $feedProvider
     * @return \Illuminate\Http\Response
     */
    public function show(FeedProvider $feedProvider)
    {
        return new FeedProviderResource($feedProvider->loadMissing(['feeds']));
    }
}

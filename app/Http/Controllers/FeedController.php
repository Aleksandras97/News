<?php

namespace App\Http\Controllers;

use App\Http\Resources\FeedResource;
use App\Models\Feed;
use Illuminate\Http\Request;

class FeedController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return FeedResource::collection(Feed::with(['feedProvider'])->get());
    }
}

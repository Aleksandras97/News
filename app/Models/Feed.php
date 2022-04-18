<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feed extends Model
{
    use HasFactory;

    public function feedProvider()
    {
        return $this->belongsTo(FeedProvider::class);
    }
}

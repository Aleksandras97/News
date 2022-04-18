<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FeedProvider extends Model
{
    use HasFactory;

    public function feeds()
    {
        return $this->hasMany(Feed::class);
    }
}

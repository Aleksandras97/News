<?php

namespace Database\Seeders;

use App\Models\Feed;
use App\Models\FeedProvider;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        FeedProvider::factory()
            ->count(3)
            ->has(Feed::factory()->count(3))
            ->create();
    }
}

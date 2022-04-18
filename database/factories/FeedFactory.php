<?php

namespace Database\Factories;

use App\Models\Feed;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Feed>
 */
class FeedFactory extends Factory
{

    protected $model = Feed::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->name(),
            'text' => $this->faker->text(100),
            'category' => $this->faker->randomElement(['First','Second']),
        ];
    }
}

<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Menfess>
 */
class MenfessFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::create(
            [
                'name' => fake()->name(),
                'email' => fake()->email(),
                'google_id' => fake()->text(20)
            ]
        );
        return [
            'user_id' => $user->id,
            'content' => fake()->text(50)
        ];
    }
}

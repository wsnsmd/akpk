<?php

namespace Database\Factories;

use App\Models\UserWi;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserWiFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = UserWi::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->firstName,
            'username' => $this->faker->unique()->userName,
            'password' => 'secret',
        ];
    }
}

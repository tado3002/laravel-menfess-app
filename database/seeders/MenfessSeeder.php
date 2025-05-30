<?php

namespace Database\Seeders;

use App\Models\Menfess;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenfessSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Menfess::factory()->createOne();
    }
}
